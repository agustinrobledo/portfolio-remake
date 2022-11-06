import Link from "next/link";
import { Company } from "./types/Experience";

type PropsType = {
  companies: Company[];
};

const CompanyExperience = ({ companies }: PropsType) => {
  return (
    <ul>
      {companies?.map((e) => (
        <li key={e.company.name}>
          <div>
            <Link href={e.company.link} className="text underline">
              {e.company.name}
            </Link>
            <p>{e.date}</p>
            <p>{e.description}</p>
            {e.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CompanyExperience;
