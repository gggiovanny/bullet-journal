import { IconType } from 'react-icons';
import { BiSolidCalendar } from 'react-icons/bi';
import { BsBookshelf, BsFillMusicPlayerFill } from 'react-icons/bs';
import { CgGym } from 'react-icons/cg';
import { CiFaceSmile } from 'react-icons/ci';
import {
  FaBookReader,
  FaBrain,
  FaClipboardList,
  FaPenFancy,
  FaRegCalendarCheck,
} from 'react-icons/fa';
import {
  FaDroplet,
  FaFaceSadCry,
  FaGlassWaterDroplet,
  FaHeartCircleCheck,
  FaShop,
  FaWeightScale,
} from 'react-icons/fa6';
import {
  GiBookCover,
  GiBookmarklet,
  GiBookPile,
  GiBookshelf,
  GiBrainstorm,
  GiNightSleep,
} from 'react-icons/gi';
import { GoGoal } from 'react-icons/go';
import { ImCamera, ImTv } from 'react-icons/im';
import { IoIosListBox } from 'react-icons/io';
import { IoFootsteps } from 'react-icons/io5';
import { MdLocalMovies } from 'react-icons/md';
import {
  PiBalloonFill,
  PiBooksFill,
  PiGiftFill,
  PiHandHeartFill,
  PiHandSoap,
  PiHeart,
  PiPaintBrushBold,
} from 'react-icons/pi';
import { RiDoubleQuotesR, RiMapPin5Line } from 'react-icons/ri';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { TiCalendarOutline, TiWeatherPartlySunny } from 'react-icons/ti';

type IconsByPageType = Record<string, IconType>;

export const iconsByPageName: IconsByPageType = {
  about_me: PiHeart,
  skin_care_routine: PiHandSoap,
  exercise_routine: CgGym,
  school_schedule: BiSolidCalendar,
  habits: FaClipboardList,
  calendar: TiCalendarOutline,
  goals: GoGoal,
  daily_routine: FaRegCalendarCheck,
  playlist: BsFillMusicPlayerFill,
  shoping_list: FaShop,
  sleep_hours: GiNightSleep,
  study_hours: GiBookshelf,
  steps: IoFootsteps,
  water_intake: FaGlassWaterDroplet,
  weight: FaWeightScale,
  pages_read: GiBookCover,
  daily_read: GiBookmarklet,
  mood: CiFaceSmile,
  weather: TiWeatherPartlySunny,
  stress: GiBrainstorm,
  anxiety: FaFaceSadCry,
  menstruation: FaDroplet,
  pending_to_read: PiBooksFill,
  reading_log: GiBookPile,
  books_to_buy: TfiShoppingCartFull,
  birthdays: PiBalloonFill,
  movies: MdLocalMovies,
  series: ImTv,
  gift_ideas: PiGiftFill,
  places: RiMapPin5Line,
  grateful_for: PiHandHeartFill,
  wanna_learn: FaBrain,
  thoughts: FaPenFancy,
  tasks: IoIosListBox,
  book_shelf: BsBookshelf,
  self_care_bingo: FaHeartCircleCheck,
  reading_challenge: FaBookReader,
  draw_per_day: PiPaintBrushBold,
  photo_challenge: ImCamera,
  quotes: RiDoubleQuotesR,
};
