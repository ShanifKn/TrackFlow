"use client";
import Image from "next/image";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center gap-8">
      <div className="w-full h-80 relative">
        <Image
          src="/images/tour/no-survey.svg"
          fill
          alt="no-survey"
          className="object-contain"
        />
      </div>

      <p className="italic">Something went wrong</p>
    </div>
  );
};

export default ErrorState;
