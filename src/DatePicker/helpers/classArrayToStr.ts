const classArrayToStr = (classArray: (string | false | undefined | null)[]) => classArray
  .filter((c) => c).join(' ');

export default classArrayToStr;
