var entry = {
  a: {
    b: {
      c: {
        dd: "abcdd"
      }
    },
    d: {
      xx: "adxx"
    },
    e: "ae"
  }
};

// // 要求转换成如下对象
// var output = {
// "a.b.c.dd": "abcdd",
// "a.d.xx": "adxx",
// "a.e": "ae"
// }

// 这道题是典型的DFS。这里有个技巧，就是将res作为参数传过去，
// 从而子函数（helper）可以对其进行修改。 这样我们可以不必依赖返回值，
// 也就避免了很多判断。

function helper(entry, prefix, res) {
  for (const key in entry) {
    if (entry[key] instanceof Object) {
      helper(entry[key], `${prefix}.${key}`, res);
    } else {
      res[`${prefix.slice(1)}.${key}`] = entry[key];
    }
  }
}

function format(entry) {
  const res = {};
  helper(entry, "", res);
  return res;
}

console.log(format(entry));
