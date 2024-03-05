export default function SliderItems({ customer, position }) {
  return (
    <article
      data-position={position}
      className="absolute flex items-center w-full h-full mx-auto text-center transition-all rounded-md opacity-0 bg-DarkGrayishBlue bg-opacity-20 "
    >
      <figure className="absolute inset-0 w-20 h-20 mx-auto rounded-full -top-10">
        <img
          src={customer.img}
          alt={`${customer.name}'s picture`}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="self-center w-full p-4 mt-6 md:mt-0">
        <h2 className="text-lg font-semibold">{customer.name}</h2>
        <p className="w-full max-w-2xl px-6 mx-auto text-sm sm:text-base sm:p-4 text-DarkGrayishBlue">
          "{customer.comment}"
        </p>
      </div>
    </article>
  );
}
