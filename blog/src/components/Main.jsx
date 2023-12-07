import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

// CLASS
class Main extends Component {

    // display
    static displayName="Main"

    // constructor
    constructor(props){
        super(props);
        // STATE
        this.state={

        }
        //BIND
    }

    // CDM

    // Function

    // RENDER
    render() {
        let data= (this.props.t('about'))
        return (
            <React.Fragment >
             <div>
               <p className="line-clamp101" style={{marginBottom:"15rem", marginTop:"5rem"}}>
               { String(data).toUpperCase().concat(" ") }
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil fugit suscipit totam sint consequuntur sed est. Atque expedita quidem laudantium quis pariatur tempora ratione recusandae, labore hic maxime facere.
               Optio tempore vel ad earum fugit pariatur cum non, eligendi consequatur accusamus totam quasi nulla facilis! Aut autem asperiores rerum consequatur ducimus velit, alias doloribus ipsum saepe, unde tenetur ratione.
               Blanditiis obcaecati maiores eveniet distinctio et saepe commodi accusamus dolorem, quisquam itaque provident vitae, molestias unde eum voluptatum quae fugiat mollitia ipsa recusandae, repellat minus. Iste quasi eveniet doloremque adipisci.
               Consequatur at ullam incidunt magnam porro quibusdam voluptas error suscipit deserunt. Culpa fuga commodi laboriosam, sit recusandae velit saepe eligendi aut corrupti unde error dicta aliquam facilis, ea quis maiores?
               Veniam, aperiam aliquid voluptates laborum fuga quaerat voluptatem dolore beatae alias ex maiores vero, culpa consequatur consequuntur, temporibus rerum nihil blanditiis? Repellendus tenetur voluptate rerum? Sed qui veniam tempora alias.
               Sapiente beatae tempore ipsam dicta incidunt animi consequuntur consequatur ex repudiandae possimus. Eligendi dignissimos id culpa, assumenda quibusdam corrupti eos, distinctio obcaecati nisi, soluta labore accusamus. Quam magnam deserunt sapiente.
               Consequuntur ipsa reprehenderit ab adipisci velit facere ullam est repellat deleniti iusto veritatis dolorum recusandae fugiat ea nobis suscipit voluptatum qui, incidunt porro sed? Saepe tempora atque molestiae quia soluta.
               Tempore dignissimos, voluptates beatae et ea consectetur facilis doloremque neque iure hic, harum dolores non! Iure dolorem tempore, ipsum minus magnam saepe modi, aspernatur placeat et, omnis in dolorum vitae?
               At, doloremque veniam velit, tempore expedita atque earum adipisci inventore a in facilis quaerat mollitia harum? Laudantium inventore doloribus repudiandae totam saepe dolore laborum. Ea cum adipisci molestias magnam consequuntur.
               Nostrum doloribus fugiat doloremque sapiente inventore quas deserunt dolor earum rerum placeat reprehenderit in corporis ab quis, iure architecto? Earum, iusto. Ex doloremque labore provident nobis, rerum veritatis vero atque?
               son
               </p> 
               </div>
               </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Main) ;