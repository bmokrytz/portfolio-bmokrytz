import Image, { type ImageProps } from 'next/image';

type CaptionImageProps = ImageProps & {
    caption: string,
};

export default function CaptionImage({ className, caption, ...imageProps }: CaptionImageProps) {
    return (
        <figure className={className}>
            <Image className='rounded-2xl' {...imageProps} />
            <figcaption className='text-sm text-charcoal/60 mt-2 text-right'>
                {caption}
            </figcaption>
        </figure>
        
    );
}