# Deploying PadjadajranHub

1) Buat akun heroku.
2) Ubah port aplikasi node ke
```
process.env.PORT || <nomer port yang digunakan>
```
3) Pindahkan aplikasi front-end ke kedalam aplikasi node.
4) Tambahkan kode dibawah didalam file JS utama dilakam aplikasi node. 
```
app.use(express.static(path.join(__dirname, "/<front end app folder name>/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/<front end app folder name>/build', 'index.html'));
});
```

5) Tambahkan script berikut di package.json pada aplikasi node.

```
"heroku-postbuild": "cd client && npm install && npm run build"
```

6) Ubah URL API didalam aplikasi react.

7) Atur environment variabel di heroku.

8) Jalankan kode berikut.
```bash
heroku login
```
```bash
git init
```
```bash
heroku git:remote -a <nama-aplikasi>
```
```bash
git add .
```
```bash
git commit -am "commit pertama"
```
```bash
git push heroku master
```
