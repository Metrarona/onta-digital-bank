import React, { useState } from 'react';
import './index.css';

function App() {
  // Estados para gerenciar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false);

  // Função para lidar com as alterações nos campos do formulário
  const handleInputChange = (field) => (event) => {
    switch(field) {
      case 'nome':
        setNome(event.target.value);
        break;
      case 'telefone':
        setTelefone(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'senha':
        setSenha(event.target.value);
        break;
    }
  };

  // Calcula o percentual preenchido da progress bar
  const getProgressValue = () => {
    const fieldsFilled = [nome, telefone, email, senha].filter(Boolean).length;
    return Math.min(fieldsFilled * 25, 100); // Maximo de 100%
  };

  // Método para finalizar o formulário
  const finalizarFormulario = () => {
    // Verifica se todos os campos estão preenchidos e termos aceitos
    if (nome && telefone && email && senha && termosAceitos) {
      alert("Formulário finalizado com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos e aceite os termos.");
    }
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário:', nome, telefone, email, senha, termosAceitos);
  };

  return (
    <main className="flex">
      {/* Lado esquerdo do formulário */}
      <aside className="flex flex-column">
        <div className="flex flex-column">
          <div className="logo">
            <a href="/">
              <img src="../src/assets/img/logo.svg" alt="Logo do Banco" />
            </a>
          </div>
          <div className="titulo">
            <h1>Complete os campos ao lado para abrir sua Conta Digital</h1>
            <p className="subtitulo">
              Aqui, você acontece com segurança e toda a praticidade que o
              Digital Bank oferece. Mais do que uma conta com cartão, você tem uma
              experiência completa com investimentos, Mimos exclusivos e muito
              mais.
            </p>
          </div>
          <small>© Power by Walter Lima Pinheiro 37021597</small>
        </div>
      </aside>

      {/* Lado direito do formulário */}
      <div className="flex flex-column">
        <div className="formulario flex flex-column">
          {/* Progress bar para mostrar o percentual de campos preenchidos */}
          <div className="progresso">
            <label className="">Preencha os campos</label>
            <progress value={getProgressValue()} max="100"></progress>
          </div>

          {/* Formulário principal */}
          <form onSubmit={handleSubmit}>
            {/* Campo para nome */}
            <div className="flex flex-column">
              <label htmlFor="nome">Digite seu nome</label>
              <input 
                type="text"
                id="nome"
                value={nome}
                onChange={handleInputChange('nome')}
              />
            </div>

            {/* Campo para telefone */}
            <div className="flex flex-column">
              <label htmlFor="telefone">Digite seu telefone</label>
              <input 
                type="text"
                id="telefone"
                value={telefone}
                onChange={handleInputChange('telefone')}
              />
            </div>

            {/* Campo para e-mail */}
            <div className="flex flex-column">
              <label htmlFor="email">Digite seu e-mail</label>
              <input 
                type="text"
                id="email"
                value={email}
                onChange={handleInputChange('email')}
              />
            </div>

            {/* Campo para senha */}
            <div className="flex flex-column">
              <label htmlFor="senha">Digite sua senha</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={handleInputChange('senha')}
              />
              <button className="mostra-senha">Exibir senha</button>
            </div>

            {/* Campo para termos de serviço */}
            <div className="flex termos">
              <input
                type="checkbox"
                name="aceita-termos"
                id="aceita-termos"
                checked={termosAceitos}
                onChange={(e) => setTermosAceitos(e.target.checked)}
              />
              <label htmlFor="aceita-termos">
                Eu li, estou ciente das condições de tratamento dos meus dados
                pessoais e dou meu consentimento, quando aplicável, conforme
                descrito nesta
              </label>
            </div>

            {/* Botão para finalizar o formulário */}
            <div className="flex">
              <button
                className="botao"
                onClick={finalizarFormulario}
                type="button"
              >
                Li e comcordo com os termos <br />
                Finalizar Cadastro
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;