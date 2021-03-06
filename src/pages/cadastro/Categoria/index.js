import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'

function CadastroCategoria() {
    const valoresIniciais ={

        nome:'',
        descricao:'',
        cor:''

    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
         // chave: nome, descrição, cor ou qualquer outro valor
        setValues({
            ...values,
            [chave]:valor, // nome: 'valor'
        });
    }

    function handleChange(infosDoEvento) {
        setValue(
          infosDoEvento.target.getAttribute('name'),
          infosDoEvento.target.value,
        );

    }

    return (

      <PageDefault>
        
                     <h1> Cadastro de Categoria: {values.nome}</h1>
        
                      <form onSubmit={function hadleSubmit (infosDoEvento) {
                         infosDoEvento.preventDefault();
                         setCategorias([
                          ...categorias,
                             values
                     ]);

                     setValues(valoresIniciais);
                   }}  />
         {/* State */}

                
        


          <FormField
             label="Nome da Categoria"
             type="text"
             name="nome"
             value={values.nome}
             onChange={handleChange}
            />

       
              <FormField
                   label="Descrição"
                   type="text"
                   name="descrição"
                   value={values.descricao}
                   onChange={handleChange}
                />

               

                         <FormField
                           label="Cor"
                           type="color"
                           nome="cor"
                           value={values.nome}
                           onChange={handleChange}
                                             
                          />

       

                            
                   
                   <Button>
                      Cadastrar
                   </Button>

                   
                
         
              <div> 
                {/* Cargando */}
                Loading...
              </div>

            
                     <ul>
                       {categorias.map((categoria) => {
                           return (
                               <li key={`${categoria.nome}`}>
                               {categoria.nome}
                               </li>

                                )

                            })}
                   </ul>

                       <Link  to="/">
                         Ir para home
                      </Link>
                     
      </PageDefault>
      
    ); 
                          
  }

  export default CadastroCategoria;