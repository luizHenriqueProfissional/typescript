const saudacao = (nome: string):string => {
    return `Olá Pessoal, meu nome é ${nome}`
}
const seuNome: string = "Luiz"
const saudacaoSeuNome: string = saudacao(seuNome)
console.log(saudacaoSeuNome);