export default class Usuario{

    #nome;
    #email;
    #senha;
    #telefone;
    
    constructor(nome, email, senha, telefone){
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
        this.#telefone = telefone;
    }
    
    
    
    get nome(){
        return this.#nome;
    }
    get email(){
        return this.#email;
    }
    
    get senha(){
        return this.#senha;
    }
    
    get telefone(){
        return this.#telefone;
    }
    
    set nome(novoNome){
        this.#nome = novoNome;
    }
    
    set email(novoEmail){
        this.#email = novoEmail;
    }
    
    set senha(novoSenha){
        this.#senha = novoSenha;
    }
    
    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
        
    }

    ToJSON(){
        return{
            "nome":this.#nome,
            "email":this.#email,
            "senha":this.#senha,
            "telefone":this.#telefone
        }
    }


    }