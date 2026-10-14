import type { Lesson } from '../../lib/types';
import { r, h2, note, qs, lesson as make, ANSWERS_NOTE } from './geomKit';

/**
 * Unit 4 Measurements: Tasks 1 and 2 (book pp. 148–149; photo …893).
 * Task 1 question 3 is circled “H.W.” in this copy but is still a printed question, so it is included.
 */

const lesson = (id: string, title: string, minutes: number, blocks: Parameters<typeof make>[4]) =>
  make('geom-measurements', id, title, minutes, blocks);

export const MEASUREMENTS_TASKS = lesson('geom-u4-tasks', 'Measurements: Tasks 1 and 2', 30, [
  h2('Task 1'),
  ANSWERS_NOTE,
  qs([
    { n: '1.1', marks: 2, context: r`An hour-glass consists of two identical cones. The top section is filled with sand. Each cone has $r=9$ mm and $H=30$ mm.`, q: r`Determine the slant height ($s$) of each cone.`, a: r`$s^2=H^2+r^2=30^2+9^2=981\Rightarrow s=31{,}32$ mm.` },
    { n: '1.2', marks: 4, context: r`Same hour-glass.`, q: r`Determine the total exterior surface area of the hour glass.`, a: r`Each cone has a circular end and a lateral surface: $SA=2\left(\pi r^2+\pi rs\right)=2\pi\cdot9\,(9+31{,}32)=2\,280{,}1\text{ mm}^2$.` },
    { n: '1.3', marks: 5, context: r`Same hour-glass.`, q: r`If it takes 1 hour for the top section to empty, what will the volume of sand be in the bottom section after 15 minutes?`, a: r`$V_{\text{cone}}=\tfrac13\pi r^2H=\tfrac13\pi\cdot9^2\cdot30=2\,544{,}7\text{ mm}^3$. If the sand flows at a constant rate, in $15$ min ($\tfrac14$ hour) a quarter of it has run down: $\tfrac14\cdot2\,544{,}7=636{,}2\text{ mm}^3$.` },
    { n: '2', q: r`The hemispheric bowl and the cylinder have the same radius ($10$) and volume. Calculate the volume of the hemispheric bowl and hence the height, $H$, of the cylinder.`, a: r`$V_{\text{hemisphere}}=\tfrac23\pi r^3=\tfrac23\pi\cdot10^3=2\,094{,}4$. Cylinder: $\pi\cdot10^2\cdot H=2\,094{,}4\Rightarrow H=\dfrac{20}{3}=6{,}67$.` },
    { n: '3', context: r`A cement pillar at the entrance of the school must be painted. It is a rectangular prism with a right pyramid on it. The prism is $2$ m high, $0{,}6$ m long and $0{,}6$ m wide. The slant height of the pyramid is $0{,}8$ m.`, q: r`Determine the total surface area to be painted.`, a: r`The base sits on the ground and the pyramid covers the top of the prism, so paint: 4 prism sides $4\cdot0{,}6\cdot2=4{,}8$ m² plus 4 pyramid triangles $4\cdot\tfrac12\cdot0{,}6\cdot0{,}8=0{,}96$ m². Total $=5{,}76\text{ m}^2$.` },
    { n: '4.1', marks: 5, context: r`Figure 1: a pyramid with slant height $h=200$ cm and base sides $80$ cm.`, q: r`Calculate the volume of Figure 1.`, a: r`Height: $H^2=200^2-40^2=38\,400\Rightarrow H=195{,}96$ cm. $V=\tfrac13\cdot80^2\cdot195{,}96=418\,046\text{ cm}^3$.` },
    { n: '4.2', marks: 6, context: r`Figure 2: a smaller pyramid with base sides $40$ cm and volume $32\,000\text{ cm}^3$.`, q: r`Calculate the height and then the surface area of the sides of the smaller pyramid.`, a: r`$V=\tfrac13\cdot40^2\cdot H=32\,000\Rightarrow H=60$ cm. Slant height: $s^2=60^2+20^2=4\,000\Rightarrow s=63{,}25$ cm. Sides: $4\cdot\tfrac12\cdot40\cdot63{,}25=5\,059{,}6\text{ cm}^2$.` },
  ]),

  h2('Task 2'),
  ANSWERS_NOTE,
  note(r`Questions 1, 2 and 4 are read from the photo; some figure labels are slightly cut at the page edge.`),
  qs([
    { n: '1.1', context: r`A “square” house (all four sides equal) is built with a pyramid as roof. The height $H$ of the pyramid is $60$ cm. Each side of the house is $5{,}2$ m long and the height $h$ of the walls is $2{,}5$ m.`, q: r`Calculate the total volume of the house.`, a: r`Walls: $5{,}2^2\cdot2{,}5=67{,}6\text{ m}^3$. Roof: $\tfrac13\cdot5{,}2^2\cdot0{,}6=5{,}41\text{ m}^3$. Total $=73{,}01\text{ m}^3$.` },
    { n: '1.2', context: r`Same house.`, q: r`Determine the surface area of the house (including the door, windows and floor) without the roof.`, a: r`Four walls $4\cdot5{,}2\cdot2{,}5=52\text{ m}^2$ plus the floor $5{,}2^2=27{,}04\text{ m}^2$: $79{,}04\text{ m}^2$.` },
    { n: '2', q: r`Determine the radius of a sphere with a surface area of $1100\text{ m}^2$.`, a: r`$4\pi r^2=1100\Rightarrow r^2=\dfrac{1100}{4\pi}=87{,}53\Rightarrow r=9{,}36$ m.` },
    { n: '3.1', context: r`The container is made up of a cylinder and a cone. The height $h$ of the cylinder is $15$ cm and the slant height $s$ of the cone is $10$ cm.`, q: r`Determine the radius $r$ if the volume of the cylinder is $4\,000\text{ cm}^3$.`, a: r`$\pi r^2\cdot15=4\,000\Rightarrow r^2=84{,}88\Rightarrow r=9{,}21$ cm.` },
    { n: '3.2', context: r`Same container.`, q: r`Hence, determine the total volume of the container.`, a: r`Cone height: $H^2=10^2-84{,}88=15{,}12\Rightarrow H=3{,}89$ cm. $V_{\text{cone}}=\tfrac13\pi\cdot84{,}88\cdot3{,}89=345{,}6$. Total $=4\,000+345{,}6=4\,345{,}6\text{ cm}^3$.` },
    { n: '3.3', context: r`Same container.`, q: r`Calculate the total surface area of the container.`, a: r`Base circle $\pi r^2=266{,}7$, cylinder side $2\pi rh=868{,}3$, cone side $\pi rs=289{,}4$. Total $=1\,424{,}4\text{ cm}^2$.` },
    { n: '4', q: r`The shape is a hemisphere on top of a cone. The total height of the model is $1{,}4$ m and the radius of the cone is $40$ cm. Calculate the volume and total surface area.`, a: r`$r=0{,}4$ m, so the cone height is $1{,}4-0{,}4=1$ m and $s=\sqrt{1^2+0{,}4^2}=1{,}077$ m. $V=\tfrac23\pi(0{,}4)^3+\tfrac13\pi(0{,}4)^2\cdot1=0{,}134+0{,}168=0{,}302\text{ m}^3$. $SA=2\pi r^2+\pi rs=1{,}005+1{,}353=2{,}36\text{ m}^2$.` },
  ]),
]);

export const GEOM_UNIT_4B_LESSONS: Lesson[] = [MEASUREMENTS_TASKS];
