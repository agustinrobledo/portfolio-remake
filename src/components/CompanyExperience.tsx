import { Company } from "./types/Experience";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "../../styles/accordion.module.css";

type PropsTypeCompanyExperience = {
  companies: Company[];
};

type PropsTypeRadixComponent = {
  children: JSX.Element;
  className?: string;
};

const CompanyExperience = ({ companies }: PropsTypeCompanyExperience) => {
  return (
    <Accordion.Root type="multiple">
      {companies?.map((e, i) => (
        <Accordion.Item value={`${i + 1}`} key={e.company.name}>
          <Accordion.Header className="text-2xl font-bold my-2">
            <Accordion.Trigger className="">
              <strong>{e.company.name}</strong>{" "}
              <span className="text-xl">({e.date}) </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.AccordionContent
            className={`${styles.AccordionContent} bg-yellow text-black p-4 rounded`}
          >
            <div>
              <p>{e.date}</p>
              <p>{e.description}</p>
              {e.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </div>
          </Accordion.AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default CompanyExperience;
