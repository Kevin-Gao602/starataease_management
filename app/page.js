export default function Home() {
  return (
    <div>
      <h1>Welcome to StrataEase_management system</h1>
      <p>This is a Web application to help property management.</p>
    </div>
  );
}
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Welcome to StrataEase_management system</h1>
      <p>This is a web application to help property management.</p>
      <Image
        src="/building.jpg"
        alt="Building Image"
        width={500} 
        height={300} 
        priority 
      />
    </div>
  );
}
