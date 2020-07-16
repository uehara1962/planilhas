import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const QUERY = graphql`
  query {
    allGoogleSheetVendedoresRow {
      edges {
        node {
          id
          nome
          cidade
          endereco
          estado
        }
      }
    }
  }
`;

const Index = () => {
  const data = useStaticQuery(QUERY);

  return (
    <div>
      <h1>Revendedores</h1>
      {/* <pre>
        {JSON.stringify(data.allGoogleSheetVendedoresRow.edges, null, 2)}
      </pre> */}
      <div>
        {data.allGoogleSheetVendedoresRow.edges.map((node) => {
          return (
            <div>
              <h3>{node.node.id}</h3>
              <h3>{node.node.nome}</h3>
              <h3>{node.node.cidade}</h3>
              <h3>{node.node.endereco}</h3>
              <h3>{node.node.estado}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
