import Image from "next/image";

function AboutText() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className=" opacity-70 relative aspect-video">
          <Image
            className="rounded-bl-lg object-cover"
            src="https://sknails.co.uk/sknailsphotos/about.jpg"
            alt="about banner"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="  opacity-70 relative aspect-video">
          <Image
            className="rounded-br-lg object-cover"
            src="https://sknails.co.uk/sknailsphotos/about2.jpg"
            alt="about banner"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
      <h1 className="text-center font-extrabold text-accent-100 text-xl md:text-2xl lg:text-4xl mt-2 mb-4">
        About Me
      </h1>
      <main className="text-base md:text-lg lg:text-lg">
        <div
          className="h-[150px] md:h-[250px] lg:h-[350px] relative aspect-square float-left mr-8 mb-6"
          style={{ shapeOutside: "circle(50%)" }}
        >
          <Image
            className="rounded-full object-cover"
            src="https://sknails.co.uk/sknailsphotos/sandra.jpg"
            alt=" Sandra Wiecek"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        {/* text-align: justify; color: #2c281f; line-height:1.6; margin bottom
        15px; font-size: 115%; */}
        <p className="text-justify text-accent-600 mb-4 leading-8 ">
          <strong>Hello everyone my name is Sandra</strong>
        </p>
        <p className="text-justify text-accent-600 mb-4 leading-8 ">
          I have been doing nails for 4 years now, staredof as way of saving me
          money and I was always displeased with the quality I was getting at
          your local walk-in nails salon, this lead me to becoming fully
          qualifield nail technician.
        </p>
        <p className="text-justify text-accent-600 mb-4 leading-8 ">
          I have decided to open up a home salon and create safe, quiet and
          comfortable space for my clients to to relax and its more convenient
          for my lige style.
        </p>
        <p className="text-justify text-accent-600 mb-4 leading-8 ">
          <strong> Why choose me?</strong>
        </p>
        <p className="text-justify text-accent-600 mb-4 leading-8 ">
          I have gathered high quality product over the 4 years and never used
          something without testing it on myself so my opinions are always
          honest I work with well-known European/English brands like HONA,
          Ruscona, Victoria Vynn, Krisy Mekins and F.O.X. I have gel product for
          all nail type and durable to whatever job you do so before I start, I
          always ask what job you do and how are your natural nails so I can
          choose right products for you.
        </p>
        <p className="text-justify text-accent-600 mb-4 leading-8 ">
          <strong>During your appointment:</strong>
        </p>
        <ul className="text-justify text-accent-600 mb-4 ml-6 leading-8  list-disc">
          <li>Aroma therapy essential oil scents</li>
          <li>Hot/Cold drinks</li>
          <li>Chance to win discount and FREE sets of nails</li>
          <li>
            NO waiting area so you don&apos;t have to worry about a busy
            environment
          </li>
          <li>Make a friend</li>
        </ul>
      </main>
    </>
  );
}

export default AboutText;
