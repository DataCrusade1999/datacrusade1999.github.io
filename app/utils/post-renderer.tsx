import RichText from "@/app/components/richText";
import ImageSlider from "@/app/components/imageSlider";
import Quote from "@/app/components/quote";
import Media from "@/app/components/media";
import VideoEmbed from "@/app/components/videoEmbed";

export function postRenderer(section: any, index: number) {
    switch (section.__component) {
        case "shared.rich-text":
            return <RichText key={index} data={section} />;
        case "shared.slider":
            return <ImageSlider key={index} data={section} />;
        case "shared.quote":
            return <Quote key={index} data={section} />;
        case "shared.media":
            return <Media key={index} data={section} />;
        case "shared.video-embed":
            return <VideoEmbed key={index} data={section} />;
        default:
            return null;
    }
}
