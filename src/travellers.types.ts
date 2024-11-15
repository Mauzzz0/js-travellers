export interface BaseTraveller {
  name: string;
  age: number;
  height: number;
  weight: number;
}

export interface ExtremeTraveller extends BaseTraveller {
  experience: number;
}

export interface BusinessTraveller extends BaseTraveller {
  company: string;
  purpose: string;
  budget: number;
}
