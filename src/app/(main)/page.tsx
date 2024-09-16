import ExamDates from "@/components/Dashboard/ExamDates";
import Percentiles from "@/components/Dashboard/Percentiles";
import Syllabus from "@/components/Dashboard/Syllabus";
import Teachers from "@/components/Dashboard/Teachers";
import UserInfo from "@/components/Dashboard/UserInfo";

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl grid sm:grid-cols-2 grid-cols-1">
      <div className="p-2"> 
        <Syllabus />
      </div>

      <div className="p-2 flex flex-col gap-4">
        <div>
          <UserInfo />
        </div>
        <div>
          <Percentiles />
        </div>
        <div>
          <ExamDates />
        </div>
        <div>
          <Teachers />
        </div>
      </div>
    </main>
  );
}
