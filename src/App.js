import './App.css';
import Book from './components/Book';
function App() {

  const books = [
    {
      title:"The Monk Who Sold His Ferrari",
      img:"https://m.media-amazon.com/images/I/411uFSVr9ZL._SY445_SX342_.jpg",
      author:"Robin Sharma",
      desc:"A renowned inspirational fiction, The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life. The plot of this story revolves around Julian Mantle, a lawyer who has made his fortune and name in the profession. A sudden heart-attack creates havoc in the successful lawyer?s life. Jolted by the sudden onset of the illness, his practice comes to a standstill. He ponders over material success being worth it all, renounces all of it and leaves for India. A visit to India about a spiritual awakening that opens up new vistas and Julian begins to view life in a different perspective. He decides to live his life once again but in a way that is much more fulfilling and meaningful than before. In the book, the reader goes through a spiritual journey and into a very old culture that has gathered much wisdom over the millennia."
    },
    {
      title:"Don't Believe Everything You Think",
      img:"https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY327_FMwebp_QL65_.jpg",
      author:"Joseph Nguyen",
      desc:"Discover how to conquer anxiety, self-doubt, and self-sabotage without depending on motivation or willpower. 'Don't Believe Everything You Think' uncovers the core of psychological suffering and offers insights to effortlessly shape the life you crave. Learn to detach from negativity, embrace love and joy, escape negative thought cycles, and tap into inner wisdom. The message is clear: anyone can attain peace, love, and fulfillment, irrespective of their history. It's not about rewiring your brain, but expanding your consciousness for lasting transformation. Within this book, delve into the core of emotional suffering and receive insights on effortlessly curating the life you aspire to."
    },
    {
      title:"Dopamine Detox",
      img:"https://m.media-amazon.com/images/I/71Q0U-8lxJS._SY522_.jpg",
      author:"thibaut meurisse",
      desc:"In today’s world where distractions are everywhere, the ability to focus has become more and more difficult to achieve. We are constantly being stimulated, feeling restless, often without knowing why. When the time comes to work, we suddenly find an excess of other things to do.Instead of working toward our goals, we go for a walk, grab a coffee, or check our emails Everything seems like a great idea—everything except the very things we should be doing."
    },
    {
      title:"Rich Dad Poor Dad",
      img:"https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg",
      author:"Robert T. Kiyosaki",
      desc:"April of 2022 marks a 25-year milestone for the personal finance classic Rich Dad Poor Dad that still ranks as the #1 Personal Finance book of all time. And although 25 years have passed since Rich Dad Poor Dad was first published, readers will find that very little in the book itself has changed — and for good reason. While so much in our world is changing a high speed, the lessons about money and the principles of Rich Dad Poor Dad haven’t changed. Today, as money continues to play a key role in our daily lives, the messages in Robert Kiyosaki’s international bestseller are more timely and more important than ever."
    },
    {
      title:"Attitude is Everything",
      img:"https://m.media-amazon.com/images/I/61go3pwTLYL._SY522_.jpg",
      author:"Jeff Keller",
      desc:"Whether your outlook is negative, positive or somewhere in between, Jeff Keller, motivational speaker and coach, will show you how to take control and unleash your hidden potential through three powerful steps:THINK! Success begins in the mind. The power of attitude can change your destinySPEAK! Watch your words. How you speak can propel you towards your goals ACT! Don't sit back. Take active steps to turn your dreams into reality Soon, you will be energized and see new possibilities. You will be able to counter adversities and develop talents unique to you. Your relationships will improve, both at work and in your personal life. All you need is this step-by-step programme to change your attitude and your life!"
    },
  ]


  const handleReadMore = (description) => {
    console.log(description);
  };

  return (
    <>
    <div style={{padding:"30px",background:"gray"}}>
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          img={book.img}
          author={book.author}
          onClick={() => handleReadMore(book.desc)}
        />
      ))}
    </div>
    </>
  );
}

export default App;
