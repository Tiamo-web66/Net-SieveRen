import DarkModeContainer from '@/components/stateless/common/DarkModeContainer';

const GlobalFooter = memo(() => {
  return (
    <DarkModeContainer className="h-full flex-center">
      <a
        href=""
        rel="noopener noreferrer"
        target="_blank"
      >
        Copyright MIT © 2021 Tiamo
      </a>
    </DarkModeContainer>
  );
});

export default GlobalFooter;
