import { Company } from "./types/Experience";
import * as Accordion from "@radix-ui/react-accordion";
import styles from "../../styles/accordion.module.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type PropsTypeCompanyExperience = {
  companies: Company[];
};

const CompanyExperience = ({ companies }: PropsTypeCompanyExperience) => {
  return (
    <Accordion.Root type="single" collapsible className="flex flex-col gap-4">
      {companies?.map((e, i) => (
        <Accordion.Item value={`${i + 1}`} key={e.company.name}>
          <Accordion.Header className="text-2xl font-bold my-2 border border-white bg-black hover:bg-white hover:text-black rounded duration-300">
            <Accordion.Trigger className="w-full p-12 flex justify-between">
              <strong>{e.company.name}</strong>
              <ChevronDownIcon />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.AccordionContent
            className={`${styles.AccordionContent} bg-white text-black p-4 rounded`}
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
