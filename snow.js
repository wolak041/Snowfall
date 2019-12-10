(function () {
  const snowflakeNumber = Math.floor(window.innerHeight / 5);
  let snowfallContainer;

  const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.textContent = '❄️';

    const style = snowflake.style;
    style.textShadow = '0 0 5px black';
    style.position = 'fixed';
    style.zIndex = '999';
    style.top = '-30px';
    style.left = `${getRandomNumber(0, window.innerWidth)}px`;
    style.animation = `10s letItSnow ${getRandomNumber(0, window.innerWidth) / 50}s infinite both linear`;

    return snowflake;
  };

  const getRandomNumber = (min, max) => (
    Math.floor(
      Math.random() * (max - min + 1)
    ) + min);

  const createSnowfall = () => {
    snowfallContainer = document.createElement('div');

    [...Array(snowflakeNumber)]
      .forEach(() => snowfallContainer.append(createSnowflake()));
    
    document.body.append(snowfallContainer);
  };

  window.addEventListener('load', () => {
    const timeout = 180000;
    let timeoutId = setTimeout(createSnowfall, timeout);
    
    const resetTimer = () => {    
      clearTimeout(timeoutId);
      snowfallContainer && snowfallContainer.remove();

      timeoutId = setTimeout(createSnowfall, timeout);
    }

    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;
    window.onkeypress = resetTimer;
    window.ontouchmove = resetTimer;
  })
})();