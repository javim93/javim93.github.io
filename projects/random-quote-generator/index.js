const quotes = [
      {frase: 'Life is what we make it, always has been, always will be.', author: 'Grandma Moses'},
      {frase: 'Go confidently in the direction of your dreams. Live the life you have imagined.', author: 'Henry David Thoreau'},
      {frase: 'It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.', author: 'Mae Jemison'},
      {frase: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
      {frase: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.', author: 'Anne Frank'},
      {frase: 'The two most important days in your life are the day you are born and the day you find out why.', author: 'Mark Twain'},
      {frase: 'I am not a product of my circumstances. I am a product of my decisions.', author: 'Stephen Covey'},
      {frase: 'Either write something worth reading or do something worth writing.', author: 'Benjamin Franklin'},
      {frase: 'Life is 10% what happens to me and 90% of how I react to it.', author: 'Charles Swindoll'},
      {frase: 'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.', author: 'Leonardo da Vinci'},
      {frase: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.', author: 'Maya Angelou'},
      {frase: 'Every child is an artist. The problem is how to remain an artist once he grows up.', author: 'Pablo Picasso'},
      {frase: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.', author: 'Mark Twain'},
      {frase: 'Nothing is impossible, the word itself says, “I’m possible!”', author: 'Audrey Hepburn'},
      {frase: 'The question isn’t who is going to let me; it’s who is going to stop me.', author: 'Ayn Rand'},
      {frase: 'The best revenge is massive success.', author: 'Frank Sinatra'},
      {frase: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.', author: 'Plato'},
      {frase: 'I didn’t fail the test. I just found 100 ways to do it wrong.', author: 'Benjamin Franklin'},
      {frase: 'Life is what happens to you while you’re busy making other plans.', author: 'John Lennon'},
      {frase: 'An unexamined life is not worth living.', author: 'Socrates'},
      {frase: 'You become what you believe.', author: 'Oprah Winfrey'},
      {frase: 'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.', author: 'Erma Bombeck'},
      {frase: 'A truly rich man is one whose children run into his arms when his hands are empty.', author: 'Unknown'},
      {frase: 'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.', author: 'Aristotle'},
      {frase: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius'},
      {frase: 'I attribute my success to this: I never gave or took any excuse.', author: 'Florence Nightingale'},
      {frase: 'There are no traffic jams along the extra mile.', author: 'Roger Staubach'},
      {frase: 'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.', author: 'Michael Jordan'},
      {frase: 'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.', author: 'Sheryl Sandberg'},
      {frase: 'Our lives begin to end the day we become silent about things that matter.', author: 'Martin Luther King Jr.'},
      {frase: 'Eighty percent of success is showing up.', author: 'Woody Allen'},
      {frase: 'You may be disappointed if you fail, but you are doomed if you don’t try.', author: 'Beverly Sills'},
      {frase: 'Too many of us are not living our dreams because we are living our fears.', author: 'Les Brown'},
      {frase: 'Everything you’ve ever wanted is on the other side of fear.', author: 'George Addair'},
      {frase: 'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.', author: 'Johann Wolfgang von Goethe'},
      {frase: 'The most common way people give up their power is by thinking they don’t have any.', author: 'Alice Walker'},
      {frase: 'Start where you are. Use what you have. Do what you can.', author: 'Arthur Ashe'}
];
var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.generateQuote()
    };
    this.generateQuote = this.generateQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };
  generateQuote = () => {
    let rng = Math.floor(Math.random() * quotes.length);
    return quotes[rng];
  };
  handleClick = () => {
    this.setState ({
      quote: this.generateQuote()
    });
  };
  render() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const rBGColor = {backgroundColor: randomColor};
    const rFontColor = {color: randomColor};
    return(
      <div className="quoteBoxWrapper" style={rBGColor}>
        <div className="quoteBox">
          <div className="quoteGenerator">

            <div className="quoteDiv">
              <h1 style={rFontColor}>"{this.state.quote.frase}"</h1>
              <h2 style={rFontColor}>-{this.state.quote.author}</h2>
            </div>

            <div className="buttonDiv">

              <div className="socialDiv">
                <a
                  style={rBGColor}
                  class="socialButton"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Change%20your%20thoughts%20and%20you%20change%20your%20world.%22%20Norman%20Vincent%20Peale">
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  style={rBGColor}
                  class="socialButton"
                  target="_blank"
                  href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Norman%20Vincent%20Peale&amp;content=Change%20your%20thoughts%20and%20you%20change%20your%20world.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button">
                  <i class="fab fa-tumblr"></i>
                </a>
              </div>

              <button
                style={rBGColor}
                className="newQuote"
                onClick={this.handleClick}>
                New Quote!
              </button>
            </div>

          </div>
        </div>
        <h3 className="sign">Coded by <a
            className="profile"
            href="https://github.com/javim93"
            target="_blank">
              javim93
          </a>
        </h3>
      </div>
    );
  };
};

ReactDOM.render(<QuoteGenerator />, document.getElementById('root'));
