"use client";
import {motion,useScroll} from "motion/react";

export default function ScrollAnimation(){
    const {scrollYProgress}=useScroll();
    return(
        <>
        <motion.div
            className="top-0 left-0 fixed right-0 h-2 origin-left z-50 bg-[#ff0088]"
            id="scrollIndicator"
            style={{scaleX:scrollYProgress}}    
            initial={{scale:0}}
            whileInView={{scale:1}}
        >
        </motion.div>
        <Content/>
        </>
    )
}


function Content(){
    return (
        <div className="text-neutral-600 font-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nulla a lacus pharetra aliquet sit amet et neque. Suspendisse potenti. In porttitor nibh metus, at porttitor ligula tempor et. Etiam faucibus tristique quam in venenatis. Maecenas maximus arcu quis justo ornare tincidunt. Maecenas nunc felis, hendrerit at urna eu, sagittis sodales nunc. Aenean aliquam metus in magna mattis, id convallis elit accumsan. Sed ultricies nec massa et volutpat. Nulla facilisi. Sed pulvinar risus id urna venenatis, nec egestas diam ullamcorper. Sed sollicitudin lectus et ligula aliquam, et ultricies nisl facilisis. Pellentesque a accumsan metus, vitae dictum est. Duis feugiat velit in lorem efficitur, sit amet gravida nibh tristique. Phasellus a sem et arcu blandit hendrerit vitae vitae orci. Maecenas venenatis odio ligula.

            Quisque et scelerisque justo. Aliquam consectetur ut tortor ac blandit. Praesent eu nisl venenatis, suscipit augue in, vulputate justo. Proin gravida consectetur tristique. Quisque tincidunt et justo non elementum. Suspendisse potenti. Donec nec ex at quam luctus rutrum. Vivamus vel risus vel mi fermentum sodales a a dui. Donec finibus finibus libero, ac fringilla neque pretium in. Ut feugiat cursus elit id tincidunt. Integer sed facilisis nisi, ac scelerisque magna. Curabitur aliquam dignissim iaculis.

            Vivamus erat orci, vulputate at viverra vel, dignissim ac turpis. Mauris at interdum felis, sit amet convallis dui. Sed odio odio, gravida in hendrerit vehicula, feugiat at metus. Integer placerat nisl in nisi pellentesque, ac aliquam mi egestas. Cras condimentum pharetra odio, malesuada fermentum nisl bibendum non. Maecenas velit erat, aliquet ut interdum eu, rutrum nec orci. Curabitur mauris felis, blandit sit amet lacus vel, venenatis consequat dolor. Nunc vitae tempus nibh. Nulla ullamcorper ex a tortor dignissim, vel aliquam ligula ultrices. Sed dictum at dui id convallis. Suspendisse potenti. Curabitur ac aliquam lacus, a bibendum nibh. Morbi vel enim enim. Sed erat odio, porta sit amet diam non, dictum molestie diam. Phasellus vel felis eu lorem aliquet cursus. Suspendisse quis diam in orci imperdiet bibendum.

            Vestibulum pharetra justo metus, ac condimentum magna accumsan ut. Nullam id faucibus eros, id maximus est. Maecenas eu purus odio. Maecenas eget vehicula mauris. Suspendisse pellentesque tempor massa ac euismod. Aenean justo augue, vulputate posuere dignissim quis, ullamcorper vitae diam. Vivamus elementum iaculis mi, pretium porttitor felis faucibus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel consequat turpis. In sed tellus pretium, sollicitudin tortor suscipit, vestibulum quam. Vivamus nisl elit, tincidunt id ultrices vel, dictum eu dolor.

            Interdum et malesuada fames ac ante ipsum primis in faucibus. In porttitor luctus mauris, non ultricies libero cursus vitae. In in hendrerit dolor. Fusce vel semper neque. Ut a leo mauris. Proin eget nisl eu magna placerat pretium ut eu lacus. Integer mattis aliquet quam eget lobortis. Suspendisse potenti. Integer tortor felis, cursus sit amet mollis non, lobortis ut quam. Curabitur faucibus dolor sit amet ipsum gravida efficitur. Sed a porttitor lorem, non mattis enim. Suspendisse potenti.

        </div>
    ); 
}
