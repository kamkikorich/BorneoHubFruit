<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Borneo Fresh Fruits | Pemborong Sabah</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; margin: 0; background: #f8f9fa; padding-bottom: 60px; }
        
        /* Header */
        header { background: linear-gradient(to right, #1e8449, #27ae60); color: white; padding: 20px; text-align: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
        h1 { margin: 0; font-size: 1.8rem; }
        p { margin: 5px 0 0; opacity: 0.9; font-size: 0.9rem; }

        /* Grid Produk */
        .container { max-width: 800px; margin: 20px auto; padding: 0 15px; }
        .product-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 15px; }
        
        /* Kad Produk */
        .card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: transform 0.2s; }
        .card:hover { transform: translateY(-5px); }
        .card img { width: 100%; height: 150px; object-fit: cover; background: #eee; }
        .card-body { padding: 12px; }
        .p-name { font-weight: bold; font-size: 1.1rem; margin-bottom: 5px; color: #333; }
        .p-desc { font-size: 0.85rem; color: #666; margin-bottom: 10px; height: 35px; overflow: hidden; }
        .p-price { color: #1e8449; font-weight: bold; font-size: 1.2rem; margin-bottom: 10px; }
        
        /* Butang WhatsApp */
        .btn-wa { display: block; background: #25D366; color: white; text-align: center; padding: 10px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 0.9rem; }
        .btn-wa:hover { background: #1ebd5b; }

        .loading { text-align: center; padding: 20px; color: #777; }

        /* Footer Admin Link */
        footer { text-align: center; padding: 30px; color: #999; font-size: 0.8rem; }
        footer a { color: #999; text-decoration: none; border: 1px solid #ddd; padding: 5px 10px; border-radius: 20px; transition: 0.3s; }
        footer a:hover { background: #ddd; color: #333; }

    </style>
</head>
<body>

<header>
    <h1>Borneo Fresh 🍍</h1>
    <p>Buah Segar Sabah & Penghantaran</p>
</header>

<div class="container">
    <div id="list" class="product-list">
        <div class="loading">Sedang memuatkan stok terkini...</div>
    </div>
</div>

<footer>
    <p>&copy; 2025 Borneo Fresh Fruits</p>
    <br>
    <a href="admin.html">🔒 Admin Login</a>
</footer>

<script src="stok.js"></script>

<script>
    // NOMBOR TELEFON TUAN
    const PHONE_NO = "60126119542"; 

    const listDiv = document.getElementById('list');

    function render() {
        if(typeof products === 'undefined' || products.length === 0) {
            listDiv.innerHTML = "<p style='text-align:center; width:100%;'>Stok sedang dikemaskini.</p>";
            return;
        }

        listDiv.innerHTML = products.map(p => `
            <div class="card">
                <img src="${p.img}" onerror="this.src='https://via.placeholder.com/300?text=Buah'">
                <div class="card-body">
                    <div class="p-name">${p.name}</div>
                    <div class="p-desc">${p.desc}</div>
                    <div class="p-price">RM ${p.price} / ${p.unit}</div>
                    <a href="https://wa.me/${PHONE_NO}?text=Salam, saya berminat dengan ${p.name} (${p.price}/${p.unit})" class="btn-wa" target="_blank">
                        Beli WhatsApp 📲
                    </a>
                </div>
            </div>
        `).join('');
    }

    render();
</script>

</body>
</html>
