export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">PicTexter</h1>
            <p className="mb-5">Turn your images into stunning text designs. Simply upload your image and our app will generate a transparent text overlay that matches the content of the image. Customize the font, color, and size of the text to create unique and eye-catching designs in just a few clicks.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  )
}
