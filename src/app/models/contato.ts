export interface Contato {
  subject_matter: string,
  comment: string,
  contact: {
    name: string,
    tel: string,
    email: string
  }
}