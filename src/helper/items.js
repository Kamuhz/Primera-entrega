 export const items = [
    // Teclados
    {
      id: 1,
      categoria: 'Teclado',
      nombre: 'Teclado Gamer XYZ',
      precio: 50,
      stock: 5
    },
    {
      id: 2,
      categoria: 'Teclado',
      nombre: 'Teclado Mecánico ABC',
      precio: 60,
      stock: 5
    },
    {
      id: 3,
      categoria: 'Teclado',
      nombre: 'Teclado Retroiluminado 123',
      precio: 45,
      stock: 5
    },
    {
      id: 4,
      categoria: 'Teclado',
      nombre: 'Teclado Inalámbrico QWERTY',
      precio: 55,
      stock: 5
    },
    {
      id: 5,
      categoria: 'Teclado',
      nombre: 'Teclado Ergonómico ABC',
      precio: 48,
      stock: 5
    },
  
    // Placas de video
    {
      id: 6,
      categoria: 'Placa de video',
      nombre: 'NVIDIA GeForce RTX 3060',
      precio: 400,
      stock: 5
    },
    {
      id: 7,
      categoria: 'Placa de video',
      nombre: 'AMD Radeon RX 6700 XT',
      precio: 380,
      stock: 5
    },
    {
      id: 8,
      categoria: 'Placa de video',
      nombre: 'NVIDIA GeForce GTX 1660',
      precio: 300,
      stock: 5
    },
    {
      id: 9,
      categoria: 'Placa de video',
      nombre: 'AMD Radeon RX 580',
      precio: 250,
      stock: 5
    },
    {
      id: 10,
      categoria: 'Placa de video',
      nombre: 'NVIDIA GeForce RTX 3070',
      precio: 450,
      stock: 5
    },
  
    // Monitores
    {
      id: 11,
      categoria: 'Monitor',
      nombre: 'Monitor LED 24 pulgadas',
      precio: 200,
      stock: 5
    },
    {
      id: 12,
      categoria: 'Monitor',
      nombre: 'Monitor Curvo 27 pulgadas',
      precio: 300,
      stock: 5
    },
    {
      id: 13,
      categoria: 'Monitor',
      nombre: 'Monitor 4K 32 pulgadas',
      precio: 400,
      stock: 5
    },
    {
      id: 14,
      categoria: 'Monitor',
      nombre: 'Monitor Ultrawide 34 pulgadas',
      precio: 350,
      stock: 5
    },
    {
      id: 15,
      categoria: 'Monitor',
      nombre: 'Monitor IPS 27 pulgadas',
      precio: 280,
      stock: 5
    },
  
    // Discos duros
    {
      id: 16,
      categoria: 'Disco duro',
      nombre: 'SSD 500GB',
      precio: 80,
      stock: 5
    },
    {
      id: 17,
      categoria: 'Disco duro',
      nombre: 'HDD 1TB',
      precio: 60,
      stock: 5
    },
    {
      id: 18,
      categoria: 'Disco duro',
      nombre: 'SSD 1TB',
      precio: 120,
      stock: 5
    },
    {
      id: 19,
      categoria: 'Disco duro',
      nombre: 'HDD 2TB',
      precio: 80,
      stock: 5
    },
    {
      id: 20,
      categoria: 'Disco duro',
      nombre: 'SSD NVMe 500GB',
      precio: 100,
      stock: 5
    },
  ]

export function getItemById (id) {
  return items.find((item) => item.id === id )
}

  