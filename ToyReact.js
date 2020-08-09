const childrenSymbol = Symbol('children')

class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
    this.type = type
    this.props = Object.create(null)
    this[childrenSymbol] = []
    this.children = []
  }

  setAttribute(name, value) {
    // let attributeName = name

    // if (attributeName === 'className') {
    //   attributeName = 'class'
    // }

    // if (name.match(/^on([\s\S]+)$/)) {
    //   this.root.addEventListener(
    //     RegExp.$1.replace(/^[\s\S]/, (c) => c.toLowerCase()),
    //     value
    //   )
    // } else {
    //   this.root.setAttribute(attributeName, value)
    // }

    this.props[name] = value
  }

  appendChild(vChild) {
    this[childrenSymbol].push(vChild)
    this.children.push(vChild.vDom)
    // let range = document.createRange()

    // if (this.root.children.length) {
    //   range.setStartAfter(this.root.lastChild)
    //   range.setEndAfter(this.root.lastChild)
    // } else {
    //   range.setStart(this.root, 0)
    //   range.setEnd(this.root, 0)
    // }

    // vChild.mountTo(range)
  }

  get vDom() {
    return this
    // return {
    //   type: this.type,
    //   props: this.props,
    //   children: this.children.map((child) => child.vDom),
    // }
  }

  mountTo(range) {
    this.range = range

    let placeholder = document.createComment('placeholder')
    let endRange = document.createRange()
    endRange.setStart(range.endContainer, range.endOffset)
    endRange.setEnd(range.endContainer, range.endOffset)
    endRange.insertNode(placeholder)

    range.deleteContents()
    let element = document.createElement(this.type)

    Object.entries(this.props).forEach(([prop, value]) => {
      let attributeName = prop

      if (attributeName === 'className') {
        attributeName = 'class'
      }

      if (attributeName.match(/^on([\s\S]+)$/)) {
        element.addEventListener(
          RegExp.$1.replace(/^[\s\S]/, (c) => c.toLowerCase()),
          value
        )
      } else {
        element.setAttribute(attributeName, value)
      }
    })

    this.children.forEach((child) => {
      let range = document.createRange()

      if (element.children.length) {
        range.setStartAfter(element.lastChild)
        range.setEndAfter(element.lastChild)
      } else {
        range.setStart(element, 0)
        range.setEnd(element, 0)
      }

      child.mountTo(range)
    })

    // let range = document.createRange()

    // if (element.children.length) {
    //   range.setStartAfter(element.lastChild)
    //   range.setEndAfter(element.lastChild)
    // } else {
    //   range.setStart(element, 0)
    //   range.setEnd(element, 0)
    // }

    // vChild.mountTo(range)

    range.insertNode(element)
  }
}

class TextWrapper {
  constructor(type) {
    this.root = document.createTextNode(type)
    this.type = '#text'
    this.children = []
    this.props = Object.create(null)
  }

  mountTo(range) {
    this.range = range
    range.deleteContents()
    range.insertNode(this.root)
  }

  get vDom() {
    return this
    // return {
    //   type: '#text',
    //   props: this.props,
    //   children: [],
    // }
  }
}

export class Component {
  constructor() {
    this.children = []
    this.props = Object.create(null)
  }

  get type() {
    return this.constructor.name
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
    // const placeholder = document.createComment('placeholder')
    // const range = document.createRange()
    // range.setStart(this.range.endContainer, this.range.endOffset)
    // range.setEnd(this.range.endContainer, this.range.endOffset)
    // range.insertNode(placeholder)

    // this.range.deleteContents()

    let vDom = this.vDom
    if (this.oldVdom) {
      const isSameNode = (node1, node2) => {
        if (node1.type !== node2.type) {
          return false
        }

        for (const name in node1.props) {
          if (
            typeof node1.props[name] === 'object' &&
            typeof node2.props[name] === 'object' &&
            JSON.stringify(node1.props[name]) ===
              JSON.stringify(node2.props[name])
          ) {
            continue
          }

          if (node1.props[name] !== node2.props[name]) {
            return false
          }
        }

        if (
          Object.keys(node1.props).length !== Object.keys(node2.props).length
        ) {
          return false
        }

        return true
      }

      const isSameTree = (node1, node2) => {
        if (!isSameNode(node1, node2)) {
          return false
        }

        if (node1.children.length !== node2.children.length) {
          return false
        }

        for (let i = 0, len = node1.children.length; i < len; i++) {
          if (!isSameTree(node1.children[i], node2.children[i])) {
            return false
          }
        }

        return true
      }

      // if (isSameTree(vDom, this.vDom)) {
      //   return
      // }

      // if (isSameNode(vDom, this.vDom)) {
      //   vDom.mountTo(this.vDom.range)
      // }

      const replace = (newTree, oldTree, indent) => {
        console.log(indent + 'new: ', newTree)
        console.log(indent + 'old: ', oldTree)

        if (isSameTree(newTree, oldTree)) {
          console.log('all same')
          return
        }

        if (isSameNode(newTree, oldTree)) {
          console.log('all different')
          newTree.mountTo(oldTree.range)
        } else {
          for (let i = 0, len = newTree.children.length; i < len; i++) {
            replace(newTree.children[i], oldTree.children[i], ' ' + indent)
          }
        }
      }

      replace(vDom, this.oldVdom, '')
    } else {
      vDom.mountTo(this.range)
    }

    this.oldVdom = vDom

    // placeholder.parentNode.removeChild(placeholder)
  }

  get vDom() {
    return this.render().vDom
  }

  appendChild(vChild) {
    this.children.push(vChild)
  }

  setState(state) {
    let merge = (prevState, newState) => {
      for (let key in newState) {
        if (Object.hasOwnProperty.call(newState, key)) {
          if (typeof newState[key] === 'object' && newState[key] !== null) {
            if (typeof prevState[key] !== 'object') {
              if (newState[key] instanceof Array) {
                prevState[key] = []
              } else {
                prevState[key] = {}
              }
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
          if (child === null || child === void 0) {
            child = ''
          }

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
