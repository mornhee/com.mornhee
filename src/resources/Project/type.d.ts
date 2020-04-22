declare interface ResourceProject {
  slug: string;
  title: string;
  duration: string[];
  details: string;
  stacks: string[];
  jobs: { [job: string]: number };
  link: string;
}
