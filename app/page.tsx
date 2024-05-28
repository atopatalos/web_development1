import Email_Signup from "@/components/Email_Signup";
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-8 p-24 w-full">
      <h1 className="text-6xl font-semibold">Hello Bro!</h1>
      <p className="text-center text-2xl">This is our first NextJS Project</p>
      <Email_Signup />
    </main>
  );
}
 

// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="text-center">
//         <h1>Hello World</h1>
//       </div>
//       <div>
//         <Image
//           src="/path/to/your/image.jpg" // Update this path to your image
//           alt="Description of the image"
//           width={500} // Update width as needed
//           height={500} // Update height as needed
//         />
//       </div>
//     </main>
//   );
// }

