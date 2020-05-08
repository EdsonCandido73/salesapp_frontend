const items = [
    { name: 'home', label: 'Home', url_item: '/home' },
  
    { name: 'produtos', 
      label: 'Produtos',
      items: [
        { name: 'cad_produtos', label: 'Cadastro', url_item: '/cad_produtos' },
        { name: 'rel_produtos', label: 'Relatórios', url_item: '/rel_produtos' },
        ],
      },
  
      { name: 'clientes', 
      label: 'Clientes',
      items: [
        { name: 'cad_clientes', label: 'Cadastro', url_item: '/cad_clientes' },
        { name: 'rel_clientes', label: 'Relatórios', url_item: '/rel_clientes' },
        ],
      },
      
      { name: 'pedidos', 
      label: 'Pedidos/Vendas',
      items: [
        { name: 'mov_pedidos', label: 'Movimentação vendas', url_item: '/mov_pedidos' },
        { name: 'rel_pedidos', label: 'Relatórios de vendas', url_item: '/rel_pedidos' },
        ],
      },
  
      { name: 'financeiro', 
      label: 'Financeiro',
      items: [
        { name: 'mov_financeiro', label: 'Movimentação financeira', url_item: '/mov_financeiro' },
        { name: 'rel_financeiro', label: 'Relatórios financeiros', url_item: '/rel_financeiro' },
        { name: 'rel_ficha_cliente', label: 'Ficha Cliente', url_item: '/rel_ficha_cliente' },
        ],
      },
  
      { name: 'fornecedores', 
      label: 'Fornecedores',
      items: [
        { name: 'cad_fornecedores', label: 'Cadastro', url_item: '/cad_fornecedores' },
        { name: 'rel_fornecedores', label: 'Relatórios', url_item: '/rel_fornecedores' },
        ],
      },
      { name: 'sair', label: 'Sair', url_item: '/sair' },
  ];

  export default items;
  