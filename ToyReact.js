class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }

  setAttribute(name, value) {
    let attributeName = name

    if (attributeName === 'className') {
      attributeName = 'class'
    }

    if (name.match(/^on([\s\S]+)$/)) {
      this.root.addEventListener(
        RegExp.$1.replace(/^[\s\S]/, (c) => c.toLowerCase()),
        value
      )
    } else {
      this.root.setAttribute(attributeName, value)
    }
  }

  appendChild(vChild) {
    let range = document.createRange()

    if (this.root.children.length) {
      range.setStartAfter(this.root.lastChild)
      range.setEndAfter(this.root.lastChild)
    } else {
      range.setStart(this.root, 0)
      range.setEnd(this.root, 0)
    }

    vChild.mountTo(range)
  }
  mountTo(range) {
    range.deleteContents()
    range.insertNode(this.root)
  }
}

class TextWrapper {
  constructor(type) {
    this.root = document.createTextNode(type)
  }

  mountTo(range) {
    range.deleteContents()
    range.insertNode(this.root)
  }
}

export class Component {
  constructor() {
    this.children = []
    this.props = Object.create(null)
  }

  setAttribute(name, value) {
    this.props[name] = value

    if (name === 'className') {
      this.class = value
    } else if (name.match(/^on[\s\S]+/)) {
      console.log(1)
    } else {
      this[name] = value
    }
  }

  mountTo(range) {
    this.range = range
    this.update()
  }

  update() {
    const placeholder = document.createComment('placeholder')
    const range = document.createRange()
    range.setStart(this.range.endContainer, this.range.endOffset)
    range.setEnd(this.range.endContainer, this.range.endOffset)
    range.insertNode(placeholder)

    this.range.deleteContents()

    let vDom = this.render()
    vDom.mountTo(this.range)

    // placeholder.parentNode.removeChild(placeholder)
  }

  appendChild(vChild) {
    this.children.push(vChild)
  }

  setState(state) {
    let merge = (prevState, newState) => {
      for (let key in newState) {
        if (Object.hasOwnProperty.call(newState, key)) {
          if (typeof newState[key] === 'object') {
            if (typeof prevState !== 'object') {
              prevState[key] = {}
            }

            merge(prevState[key], newState[key])
          } else {
            prevState[key] = newState[key]
          }
        }
      }
    }

    if (!this.state && state) {
      this.state = {}
    }

    merge(this.state, state)

    this.update()
  }
}

export const ToyReact = {
  createElement(type, attributes, ...children) {
    let element

    if (typeof type === 'string') {
      element = new ElementWrapper(type)
    } else {
      // prettier-ignore
      element = new type
    }

    if (attributes) {
      Object.entries(attributes).forEach(([name, value]) => {
        element.setAttribute(name, value)
      })
    }

    const insertChildren = (children) => {
      children.forEach((child) => {
        let newChild = child

        if (Array.isArray(child)) {
          insertChildren(child)
        } else {
          if (
            !(
              child instanceof Component ||
              child instanceof ElementWrapper ||
              child instanceof TextWrapper
            )
          ) {
            newChild = String(child)
          }

          if (typeof newChild === 'string') {
            newChild = new TextWrapper(child)
          }

          element.appendChild(newChild)
        }
      })
    }

    insertChildren(children)

    return element
  },

  render(vDom, element) {
    let range = document.createRange()

    if (element.children) {
      range.setStartAfter(element.lastChild)
      range.setEndAfter(element.lastChild)
    } else {
      range.setStart(element, 0)
      range.setEnd(element, 0)
    }

    vDom.mountTo(range)
  },
}
