# Busy Beaver

忙碌海狸图灵机的纸带可视化。内置 BB(1) 到 BB(5) 的冠军机，BB(5) 运行 47,176,870 步后停机，留下 4098 个 1。

[在线访问](https://minsecrus.github.io/BusyBeaver/)

```sh
pnpm install
pnpm dev
```

顶栏切换机器，运行、暂停、单步、重置；底部选择播放速度，从每帧 1 步到 100 万步。侧栏转移表高亮当前生效的规则。

构建：`pnpm build`。

推送到 `main` 自动部署 GitHub Pages。

[MIT](LICENSE)
