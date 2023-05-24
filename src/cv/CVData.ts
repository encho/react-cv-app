export type CVData = {
  name: string;
  personalData: {
    dateOfBirth?: string;
    birthplace?: string;
    maritalStatus?: string;
    citizenship?: string;
  };
  contactData: {
    phone?: string;
    address?: string;
    email?: string;
    web?: string;
    linkedin?: string;
  };
  education: {
    institution: {
      name: string;
      city: string;
      country: string;
      url: string;
    };
    period: {
      startDate: string;
      endDate: string;
    };
    degree: string;
    thesis?: {
      title: string;
      publicationDate: string;
      url: string;
    };
    description?: string;
  }[];
  work: {
    organization: {
      name: string;
      city: string;
      country: string;
      url: string;
    };
    period: {
      startDate: string;
      endDate: string;
    };
    title: string;
    description: string;
  }[];
  skills: { name: string; entries: string[] }[];
  languages: { language: string; level: string }[];
};
