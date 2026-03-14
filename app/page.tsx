'use client';
import { useState } from 'react';

export default function Home() {
  const [beer, setBeer] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const beers = [
    {
      name: 'IPA Andina',
      desc: 'Cerveza artesanal intensa con lúpulo aromático.',
      price: 18,
      img: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148',
    },
    {
      name: 'Lager Dorada',
      desc: 'Refrescante y ligera perfecta para cualquier ocasión.',
      price: 15,
      img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699',
    },
    {
      name: 'Stout Cedro',
      desc: 'Oscura y cremosa con notas tostadas.',
      price: 20,
      img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9',
    },
  ];

  function addToCart(b: any) {
    setCart([...cart, b]);
  }

  function removeFromCart(i: number) {
    const newCart = [...cart];
    newCart.splice(i, 1);
    setCart(newCart);
  }

  return (
    <div
      style={{
        fontFamily: 'system-ui',
        background: '#0b0b0b',
        color: 'white',
      }}
    >
      {/* NAVBAR */}

      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px 60px',
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(6px)',
          zIndex: 100,
        }}
      >
        <h2
          style={{
            color: '#d4af37',
            letterSpacing: '4px',
          }}
        >
          ALAJ BIER
        </h2>

        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#cervezas">Cervezas</a>
          <a href="#historia">Historia</a>

          <div
            onClick={() => setShowCart(!showCart)}
            style={{
              background: '#d4af37',
              color: 'black',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            🛒 {cart.length}
          </div>
        </div>
      </nav>

      {/* HERO */}

      <section
        style={{
          height: '100vh',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1608270586620-248524c67de9)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.65)',
          }}
        />

        <div style={{ position: 'relative' }}>
          <h1
            style={{
              fontSize: '80px',
              letterSpacing: '8px',
            }}
          >
            ALAJ BIER
          </h1>

          <p style={{ fontSize: '28px' }}>Pomabamba en cada sorbo 🍺</p>
        </div>
      </section>

      {/* CERVEZAS */}

      <section id="cervezas" style={{ padding: '120px 80px' }}>
        <h2
          style={{
            textAlign: 'center',
            color: '#d4af37',
            marginBottom: '60px',
            fontSize: '36px',
          }}
        >
          NUESTRAS CERVEZAS
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '40px',
          }}
        >
          {beers.map((b, i) => (
            <div
              key={i}
              style={{
                background: '#161616',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: '0.3s',
                boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img
                src={b.img}
                style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover',
                }}
                onClick={() => setBeer(b)}
              />

              <div style={{ padding: '20px' }}>
                <h3>{b.name}</h3>

                <p style={{ opacity: 0.7 }}>S/ {b.price}</p>

                <button
                  onClick={() => addToCart(b)}
                  style={{
                    marginTop: '10px',
                    padding: '10px 18px',
                    background: '#d4af37',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '6px',
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HISTORIA */}

      <section
        id="historia"
        style={{
          padding: '120px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        <div>
          <h2
            style={{
              color: '#d4af37',
              fontSize: '36px',
            }}
          >
            Nuestra Historia
          </h2>

          <p style={{ lineHeight: '1.8' }}>
            ALAJ BIER nace en Pomabamba con el objetivo de crear cerveza
            artesanal inspirada en los cedros y montañas de Áncash.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1566633806327-68e152aaf26d"
          style={{
            width: '100%',
            borderRadius: '12px',
          }}
        />
      </section>

      {/* CARRITO DESPLEGABLE */}

      {showCart && (
        <div
          style={{
            position: 'fixed',
            right: '20px',
            top: '80px',
            width: '300px',
            background: '#111',
            padding: '20px',
            borderRadius: '10px',
            zIndex: 200,
          }}
        >
          <h3>Carrito</h3>

          {cart.length === 0 && <p>Vacío</p>}

          {cart.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '10px',
              }}
            >
              <span>{item.name}</span>

              <button
                onClick={() => removeFromCart(i)}
                style={{
                  background: 'red',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}

      {beer && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}
        >
          <div
            style={{
              background: '#111',
              padding: '30px',
              borderRadius: '12px',
              maxWidth: '420px',
              textAlign: 'center',
            }}
          >
            <img
              src={beer.img}
              style={{
                width: '100%',
                borderRadius: '10px',
              }}
            />

            <h2 style={{ marginTop: '15px' }}>{beer.name}</h2>

            <p style={{ opacity: 0.8 }}>{beer.desc}</p>

            <button
              onClick={() => addToCart(beer)}
              style={{
                marginTop: '15px',
                padding: '10px 20px',
                background: '#d4af37',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '6px',
              }}
            >
              Agregar al carrito
            </button>

            <br />

            <button
              onClick={() => setBeer(null)}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                background: '#333',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                borderRadius: '6px',
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
