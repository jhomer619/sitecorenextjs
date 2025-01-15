import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type ArticleProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */


export const Default = ({ fields }: ArticleProps): JSX.Element => (
  <div className="contentBlock">
    <Text tag="h2" className="contentTitle" field={fields.Title} />

    <Text className="contentDescription" field={fields.Description} />
  </div>
);

