const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = add(this.tree, data);

    function add(node, data) {
      if (node == null) {
        return new Node(data);
      }

      if (data < node.data) {
        node.left = add(node.left, data)
      } else {
        if (data === node.data) {
          return node
        }
        node.right = add(node.right, data)
      }

      return node;
    }

  }

  has(data) {
    return has(this.tree, data);

    function has(node, data) {
      if (node == null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data < data) {
        return has(node.right, data);
      } else {
        return has(node.left, data);
      }
    }
  }

  find(data) {
    return find(this.tree, data);

    function find(node, data) {
      if (node == null) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        return find(node.right, data);
      } else {
        return find(node.left, data);
      }
    }
  }

  remove(data) {
    this.tree = remove(this.tree, data);

    function remove(node, data) {
      if (node == null) {
        return null;
      }

      if (node.data < data) {
        node.right = remove(node.right, data)
        return node;
      }

      if (node.data > data) {
        node.left = remove(node.left, data)
        return node;
      }

      if (node.left == null) {
        node = node.right;
        return node
      }

      if (node.right == null) {
        node = node.left;
        return node;
      }

      // найти максимум в левом поддереве
      // найти минимум в правом поддереве

      let minInRightTree = node.right;
      while (minInRightTree.left) {
        minInRightTree = minInRightTree.left;
      }

      node.data = minInRightTree.data;
      node.right = remove(node.right, node.data);

      return node;
    }
  }

  min() {
    let node = this.tree;

    if (node == null) {
      return
    }

    while (node.left) {
      node = node.left;
    }

    return node.data;

  }

  max() {
    let node = this.tree;

    if (node == null) {
      return
    }

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};