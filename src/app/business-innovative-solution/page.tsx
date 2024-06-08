import Image from 'next/image';

const BusinessInnovativeSolution = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-gray-900">Business Innovative Solution</h1>
        <p className="text-lg text-gray-600">Unlocking creativity for business success</p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/BusinessInnovativeSolution.png"
          alt="Business Innovative Solution"
          width={800}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="mt-8 text-lg text-gray-800">
        <h2 className="text-xl font-semibold mb-4">Why Choose Business Innovative Solution?</h2>
        <p>
          In today's competitive landscape, innovation is key to staying ahead. Our Business Innovative Solution
          offers a range of services and strategies to help businesses unlock their creative potential and
          drive success.
        </p>
        <p className="mt-4">
          From brainstorming sessions and ideation workshops to technology-driven solutions and market research,
          we tailor our approach to meet the unique needs of each client. With our expertise and dedication
          to innovation, we empower businesses to thrive in a rapidly changing world.
        </p>
      </div>
    </div>
  );
};

export default BusinessInnovativeSolution;
