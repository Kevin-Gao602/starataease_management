以下是调整后的 `page.js` 代码，设置图片宽度为 `300px` ，高度为 `200px` ，你可以直接替换原文件内容使用：

```jsx
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Welcome to StrataEase_management system</h1>
      <p>This is a Web application to help property management.</p>
      <Image
        src="/building.jpg"
        alt="Building Image"
        width={300}
        height={200}
      />
    </div>
  );
}
```

记得通过 `npm run dev` 或 `yarn dev` 启动Next.js开发服务器来查看效果，而不要直接用 `node` 运行该文件。 