import Image from 'next/image';

interface GraphicBannerProps {
  src: string;
  alt: string;
}

const GraphicBanner: React.FC<GraphicBannerProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full my-8 md:my-12">
            <div className="aspect-square">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default GraphicBanner;
