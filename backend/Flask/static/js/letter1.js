function Letter1() {
    const [showBlur, setShowBlur] = useState(true);
    const [countdown, setCountdown] = useState(3);
  
    useEffect(() => {
      let countdownInterval;
  
      if (countdown > 0 && !showBlur) {
        countdownInterval = setInterval(() => {
          setCountdown(countdown - 1);
        }, 1000);
      }
  
      if (countdown === 0) {
        setShowBlur(false);
      }
  
      return () => clearInterval(countdownInterval);
    }, [countdown, showBlur]);
  }
  
  export default Letter1;
  