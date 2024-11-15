export default class CPFValidator {
  private cpf: string

  constructor(cpf: string) {
    this.cpf = cpf.replace(/[^\d]+/g, '') // Remove caracteres não numéricos
  }

  public isValid(): boolean {
    if (this.cpf.length !== 11 || /^(\d)\1+$/.test(this.cpf)) return false // Verifica se é repetido ou inválido

    let sum = 0
    let remainder

    // Calcula o primeiro dígito verificador
    for (let i = 1; i <= 9; i++) sum += Number.parseInt(this.cpf.substring(i - 1, i)) * (11 - i)
    remainder = (sum * 10) % 11

    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== Number.parseInt(this.cpf.substring(9, 10))) return false

    sum = 0
    // Calcula o segundo dígito verificador
    for (let i = 1; i <= 10; i++) sum += Number.parseInt(this.cpf.substring(i - 1, i)) * (12 - i)
    remainder = (sum * 10) % 11

    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== Number.parseInt(this.cpf.substring(10, 11))) return false

    return true
  }
}
