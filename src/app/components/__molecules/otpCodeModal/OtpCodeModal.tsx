"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";

const OtpCodeModal = () => {
  return (
    <div className="absolute w-full h-full bg-white top-0 left-0 z-10 flex flex-col items-center justify-center gap-6">
      <h2>One-Time Password</h2>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <p>Please enter the one-time password sent to your email.</p>
    </div>
  );
};

export default OtpCodeModal;

// "use client";
// import { z } from "zod";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// // import { toast } from "react-toastify";
// import { Button } from "@/components/ui/button";
// import { toast } from "@/hooks/use-toast";
// import { OTPInputContext } from "input-otp";
// import { useState } from "react";

// const FormSchema = z.object({
//   pin: z.string().min(6, {
//     message: "Your one-time password must be 6 characters.",
//   }),
// });

// export function InputOTPForm() {
//   const [value, setValue] = useState("");
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       pin: "",
//     },
//   });

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="pin"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>One-Time Password</FormLabel>
//               <FormControl>
//                 <InputOTP maxLength={6} {...field}>
//                   <OTPInputContext.Provider value={value}>
//                     <InputOTPGroup>
//                       <InputOTPSlot index={0} />
//                       <InputOTPSlot index={1} />
//                       <InputOTPSlot index={2} />
//                       <InputOTPSlot index={3} />
//                       <InputOTPSlot index={4} />
//                       <InputOTPSlot index={5} />
//                       <InputOTPSlot index={6} />
//                     </InputOTPGroup>
//                   </OTPInputContext.Provider>
//                 </InputOTP>
//               </FormControl>
//               <FormDescription>
//                 Please enter the one-time password sent to your phone.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// }
