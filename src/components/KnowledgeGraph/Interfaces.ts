// Interfaces.ts
export interface INode {
    id: string;
    label: string;
    title?: string;
    name?: string;
    url?: string;
  }
  
  export interface IEdge {
    source: string;
    target: string;
    relation: string;
  }
  
  export interface IGraph {
    nodes: INode[];
    edges: IEdge[];
  }
  