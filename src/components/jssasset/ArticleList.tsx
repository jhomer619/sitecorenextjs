import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';



type ArticleProps = ComponentProps & {
 fields: {
    items: Items[]
 };
};

type Items = {
    fields: {
        Title: Field<string>;
        Description: Field<string>;
    };
}



/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */


export const Default = (props: ArticleProps): JSX.Element => {
    const results =    props.fields.items && props.fields.items.map((item, index) => {
        return (
            <div className="contentBlock" key={index}>
                <Text tag="h2" className="contentTitle" field={item.fields.Title} />

                <Text className="contentDescription" field={item.fields.Description} />
            </div>
        )
    });
    return (
        <>{results}</>
        
    );
   
        
   
};
   

