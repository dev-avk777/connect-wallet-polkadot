import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgSuccessCheckmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 240 240"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#success_checkmark_svg__a)">
      <path
        fill="#000"
        d="M32.298 48.21c.025-.498.092-.992.26-1.463.34-.946.886-1.448 1.783-1.857 3.821-.213 2.278 2.535 3.484 3.305.668.427 1.594.18 2.32.782.487.404.763 1.15.818 1.767a2.2 2.2 0 0 1-.57 1.694c-.769.862-1.812 1.068-2.903 1.155-.054.508-.092 1.06-.263 1.544-.327.922-.946 1.362-1.812 1.748-.676-.01-1.297-.097-1.876-.474-.97-.632-1.154-1.77-1.34-2.82-.936-.042-1.767-.174-2.515-.78a2.5 2.5 0 0 1-.942-1.78 2.4 2.4 0 0 1 .062-.727 2.5 2.5 0 0 1 .272-.676 2.5 2.5 0 0 1 .286-.394c.805-.917 1.807-.975 2.936-1.025m2.139-2.61c-.664.426-1.1.875-1.286 1.661-.123.518-.106 1.077-.112 1.606-1.187.097-2.492.117-3.338 1.096-.206.239-.386.582-.367.908.03.524.335.944.742 1.258.863.665 1.887.684 2.925.784.067.928.05 2.1.795 2.78.426.387.878.46 1.433.52a3.84 3.84 0 0 0 1.343-1.164q.198-1.093.34-2.194c1.013-.039 2.083-.016 2.829-.829.295-.322.461-.74.443-1.18-.02-.508-.279-.98-.666-1.304-.8-.671-1.688-.671-2.679-.68-.061-.74-.091-1.496-.246-2.223-.475-.523-.858-.982-1.608-1.04a5 5 0 0 0-.548.002M64.668 66.843c-.316-2.214-2.988-20.178-2.72-20.739l.235.039.049-.212.055.107c3.344-.331 6.853-.134 10.223-.155l18.674-.19 70.422-.631c2.683-.06 5.408-.157 8.089-.076.486 2.06.659 4.282.965 6.38.646 4.443 1.26 8.904 2.025 13.327 1.434-1.746 4.45-5.498 6.17-6.657a6.7 6.7 0 0 1 2.64-1.042c2.085-.362 5.069.007 7.267.007 2.576 0 6.097-.283 8.533-.027.549.058.941.16 1.393.488 2.083 1.504 3.937 3.524 5.844 5.25l5.411 4.853c1.187 1.072 2.531 2.154 3.496 3.433.558.738.871 1.773 1.023 2.68a7 7 0 0 1 .102 1.182 6.9 6.9 0 0 1-.401 2.328 7 7 0 0 1-.491 1.08c-1.176 2.127-4.631 5.62-6.346 7.639l-15.85 18.521c-2.409 2.834-5.11 5.588-7.25 8.627 1.784 11.776 3.936 23.53 6.017 35.259l7.33 41.702 2.236 12.768c.313 1.762 1.578 7.418 1.387 8.816-.234.25-.393.324-.737.375-.757.114-1.593.09-2.36.133q-2.395.13-4.788.293l-20.091 1.187-49.587 2.992q-13.207.724-26.404 1.603c-3.535.2-7.073.34-10.606.592-.334-1.433-.465-2.983-.685-4.443q-.705-4.543-1.31-9.102c-1.952-.43-3.935-.717-5.89-1.14a65.692 65.692 0 0 1-10.73-3.297 71 71 0 0 1-4.923-2.193 74 74 0 0 1-4.746-2.556 71.5 71.5 0 0 1-7.444-5.022 76 76 0 0 1-2.793-2.262 72 72 0 0 1-7.655-7.58 72 72 0 0 1-4.438-5.651 74 74 0 0 1-2.003-2.984 72 72 0 0 1-5.79-11.15c-7.339-17.283-6.792-36.703.193-53.991 1.184-2.93 2.645-5.626 4.04-8.45 1.4-2.836 2.638-5.655 4.29-8.37 6.614-10.87 16.284-18.802 27.929-23.74m121.765-8.409c-1.987-.795-4.038-1.116-6.073-.26a6.4 6.4 0 0 0-2.068 1.378c-1.823 1.801-3.465 3.877-5.157 5.803l-8.963 10.147-24.08 27.258a697 697 0 0 1-8.279 9.416c-1.521 1.711-3.02 3.577-4.722 5.106-1.414-.862-2.739-2.228-3.978-3.334l-6.834-6.169c-1.151-1.052-2.289-2.281-3.646-3.066a6.65 6.65 0 0 0-2.999-.904c-1.932-.014-3.604.411-5.029 1.801-1.771 1.729-3.348 3.723-5.013 5.56-2.1 2.316-8.804 9.203-9.998 11.606.11.826 3.262 3.605 4.016 4.185q.05.037.102.073c1.261 1.398 2.78 2.628 4.145 3.93l9.287 8.879 10.615 10.258c1.732 1.676 3.426 3.854 5.513 5.084 1.574.928 3.167 1.241 4.955.725 1.373-.396 2.341-1.244 3.303-2.249 2.875-3.002 5.52-6.261 8.292-9.362l28.498-32.509 18.896-21.42a858 858 0 0 0 8.352-9.416c1.244-1.41 3.286-3.339 4.135-4.945.698-1.322.792-2.897.336-4.314a5 5 0 0 0-.906-1.686c-1.581-1.932-3.757-3.626-5.592-5.32-1.944-1.797-3.815-3.75-5.857-5.431a6.5 6.5 0 0 0-1.251-.824M44.476 81.787c-1.872 2.053-3.66 4.148-5.245 6.432-7.936 11.432-11.46 25.712-10.814 39.536a76 76 0 0 0 1.046 8.983 75.3 75.3 0 0 0 3.892 13.923 74 74 0 0 0 2.14 4.989 74 74 0 0 0 2.493 4.822 75 75 0 0 0 3.855 6.124 74 74 0 0 0 3.267 4.335 76 76 0 0 0 4.828 5.391 72 72 0 0 0 2.603 2.515 76 76 0 0 0 4.997 4.209 75.4 75.4 0 0 0 16.9 9.828c2.779 1.22 5.862 2.305 8.825 2.963-.5-3.163-.864-6.342-1.324-9.51l-3.242-22.193-8.264-56.991-3.895-26.931a590 590 0 0 1-1.046-7.524c-.226-1.686-.396-3.4-.74-5.067a57 57 0 0 0-5.627 2.677 56 56 0 0 0-4.008 2.407 56 56 0 0 0-3.794 2.73 57 57 0 0 0-5.78 5.216q-.543.561-1.067 1.136m108.29 5.353 19.205-21.711c-.939-4.715-1.491-9.587-2.157-14.35-.244-1.745-.383-3.58-.755-5.298-8.919-.068-17.85.162-26.77.242l-40.967.332-29.76.3c-2.965.05-5.962-.036-8.92.094 2.05 12.744 3.621 25.583 5.425 38.365l7.319 50.223 8.166 56.733c1.243 8.621 2.642 17.243 3.726 25.883 3.184-.225 6.386-.311 9.574-.504l28.614-1.738 74.985-4.476c-.457-3.551-1.231-7.1-1.858-10.627l-2.925-16.751-8.519-48.465c-1.225-7.169-2.643-14.34-3.67-21.537l-.871 1.012c-6.575 7.463-13.443 14.735-19.797 22.385l-.94 1.05-7.488 8.348c-2.272 2.538-5.471 6.719-8.263 8.339-1.655.96-3.411 1.189-5.289 1.288l-8.965.454c-2.041.113-4.387.512-6.408.172-1.185-.2-2.176-.668-3.182-1.311-2.081-1.507-3.966-3.805-5.887-5.565-1.051-1.318-2.559-2.508-3.782-3.686-2.396-2.308-4.744-4.686-7.2-6.928-3.79-3.788-7.729-7.451-11.614-11.142-1.463-1.39-3.14-2.703-4.493-4.186-.287-.315-.56-.612-.594-1.057-.032-.434.081-.74.31-1.107.785-1.257 1.955-2.351 2.93-3.465a405 405 0 0 1 7.894-8.742c-4.187.075-8.401.192-12.577.5-.417-1.916-3.538-21.437-3.238-22.18l.569-.16c.114.121.183.218.214.385.573 3.087.906 6.269 1.375 9.38.593 3.926 1.32 7.866 1.74 11.812 4.138-.073 8.314-.402 12.446-.345 2.35-2.738 4.403-5.83 8.331-6.115.388-.028.78-.017 1.168-.007 1.145.136 2.061.459 3.11.929a22 22 0 0 1 2.655 2.051l21.342-.854c4.152-4.785 8.392-9.493 12.502-14.315-3.274.04-6.559.246-9.833.359l-17.885.601-6.933.301c-1.211.055-2.52.229-3.723.105l-.036-.176.056-.167c.07-.048.128-.12.209-.146.674-.217 6.264-.278 7.513-.328 10.408-.416 20.85-.523 31.246-1.152zM67.853 191.317c-3.057-1.56-6.175-3.262-9.02-5.182q-.633-.427-1.257-.87a72 72 0 0 1-2.46-1.816 77 77 0 0 1-2.381-1.915 74 74 0 0 1-3.42-3.053 77 77 0 0 1-2.174-2.151 71 71 0 0 1-2.082-2.237 74 74 0 0 1-4.79-5.952 71 71 0 0 1-1.74-2.513 70 70 0 0 1-1.636-2.582 76 76 0 0 1-2.25-3.994 78 78 0 0 1-1.362-2.737 75 75 0 0 1-2.38-5.63 75 75 0 0 1-1.016-2.883c-3.806-11.695-4.808-24.296-2.03-36.33-1.15 2.199-1.704 4.925-2.271 7.333a67.8 67.8 0 0 0-.944 27.327 69 69 0 0 0 .922 4.494 68 68 0 0 0 1.225 4.421 72 72 0 0 0 2.588 6.997 71 71 0 0 0 4.558 8.837 72 72 0 0 0 2.73 4.16 71.5 71.5 0 0 0 11.683 12.857c1.787 1.527 3.722 3.203 5.747 4.406 8.934 6.59 19.595 10.268 30.44 12.107-.518-2.525-.695-5.143-1.137-7.688-5.112-.768-10.904-3.169-15.543-5.406m119.321-133.49c.027.035.05.072.079.104.447.496 1.234.812 1.749 1.284 1.59 1.457 3.101 3.008 4.683 4.477 1.734 1.612 5.248 4.403 6.44 6.232.686 1.051 1.004 2.291 1.005 3.54 0 1.419-.425 2.691-1.265 3.832-1.035 1.405-2.298 2.677-3.456 3.986l-5.88 6.699a3378 3378 0 0 1-22.854 25.818c-1.723 1.956-3.378 3.97-5.089 5.936l-21.198 24.114c-3.335 3.733-6.523 7.751-10.088 11.257a31 31 0 0 1-.935.884c3.953-.196 8.006-.211 11.935-.64 1.775-.221 3.361-.82 4.731-1.997 2.523-2.168 4.706-4.997 6.93-7.473a1231 1231 0 0 0 14.476-16.321 1701 1701 0 0 0 29.051-33.39l10.045-11.728c1.605-1.884 3.302-3.737 4.832-5.68 1.056-1.34 1.551-2.996 1.319-4.694-.13-.952-.474-1.99-1.045-2.766-.859-1.164-2.103-2.14-3.177-3.103l-5.405-4.807c-1.896-1.712-3.741-3.77-5.813-5.252a8 8 0 0 0-.45-.304c-2.177-.088-4.367-.044-6.546-.045-1.34 0-2.745-.096-4.074.037m-51.22 47.932c-6.629.103-13.249.541-19.877.676 1.906 1.628 3.716 3.366 5.602 5.016 1.766 1.606 3.546 3.22 5.405 4.718 1.173-1.276 8.995-9.659 9.16-10.342-.198-.095-.1-.08-.29-.068"
      />
      <path
        fill="#fff"
        d="M33.039 48.867c.006-.53-.011-1.088.112-1.606.186-.786.622-1.235 1.286-1.66a5 5 0 0 1 .548-.003c.75.059 1.133.518 1.607 1.041.156.727.185 1.483.247 2.223.99.009 1.88.009 2.679.68.387.325.646.795.666 1.305.018.439-.148.857-.443 1.18-.746.812-1.817.79-2.83.828a43 43 0 0 1-.339 2.194 3.84 3.84 0 0 1-1.344 1.164c-.555-.06-1.007-.133-1.432-.52-.745-.68-.728-1.852-.795-2.78-1.038-.1-2.062-.119-2.926-.785-.406-.313-.712-.733-.741-1.258-.019-.325.161-.669.367-.907.846-.98 2.151-1 3.338-1.096M152.766 87.14l-25.998.703-10.3.317c-1.971.07-3.941.23-5.915.203.116 1.22.325 2.413.514 3.622l.035.176 1.269 7.825c.212 1.273.591 2.639.607 3.927-1.049-.47-1.965-.793-3.11-.928l-.936-.149c-.449-1.479-.556-3.755-.808-5.353-.576-3.657-1.265-7.297-1.855-10.952q-7.35.394-14.693.906c-1.823.128-5.37.607-6.983.438l-.568.159c-.3.743 2.82 20.265 3.238 22.181 4.176-.309 8.39-.426 12.576-.501a402 402 0 0 0-7.893 8.743c-.975 1.113-2.145 2.207-2.93 3.464-.229.367-.343.673-.31 1.107.033.445.306.742.594 1.057 1.353 1.483 3.03 2.796 4.493 4.186 3.885 3.691 7.824 7.354 11.614 11.142-3.957.325-8.6.607-12.53.642l-.524.26c-.136.56 3.11 19.291 3.5 21.695q8.08-.506 16.154-1.117c1.438-.107 4.449-.082 5.665-.522l.134-.084c.439-1.096-1.406-8.393-1.417-10.26 1.92 1.76 3.806 4.058 5.887 5.565.246 1.23.887 3.07.902 4.235l.168.274c.221.097.365.113.598.091 3.667-.341 7.397-.438 11.076-.644l25.129-1.275c5.177-.239 10.388-.377 15.555-.774.138.105.313.117.484.126.26.013.424-.022.606-.21-.029-1.989-.621-4.188-.971-6.151a639 639 0 0 0-2.794-14.715c.841-1.169 1.844-2.248 2.78-3.342l4.633-5.421c1.251-1.476 2.807-3.096 3.581-4.881-.192-2.638-.81-5.457-1.415-8.038l.871-1.012c1.027 7.197 2.445 14.368 3.67 21.537l8.519 48.465 2.925 16.752c.627 3.526 1.401 7.075 1.858 10.626l-74.985 4.476-28.614 1.739c-3.188.192-6.39.278-9.574.503-1.085-8.64-2.483-17.262-3.726-25.883l-8.166-56.733-7.32-50.223c-1.803-12.782-3.375-25.62-5.424-38.365 2.958-.13 5.954-.043 8.92-.093l29.76-.3 40.967-.333c8.92-.08 17.851-.31 26.77-.242.372 1.718.511 3.553.755 5.298.666 4.763 1.218 9.635 2.157 14.35zm5.927-21.126c-.107-2.148-.658-4.266-.762-6.405l-77.93.505q.61 3.096 1.078 6.218c.057.11.13.186.213.278 1.952.251 4.404.05 6.418.05l13.757-.006 47.303-.024c1.758.002 9.66.228 10.739-.118l.012-.19c-.314-.293-.414-.26-.828-.308m-60.162 111.61-.637.044c-.17.22-.217.368-.172.652.078.495.255.952.314 1.459l.309 1.705 2.111 12.184c.351 2.032.562 4.396 1.212 6.342.658.35 1.742.082 2.47.009 2.349-.025 4.696-.306 7.038-.443q7.014-.366 14.021-.814c-.252-2.51-.859-5.032-1.323-7.513-.947-5.066-1.972-10.155-2.759-15.247-1.529.168-3.078.208-4.613.338q-8.979.726-17.97 1.284m26.966-1.205q.428 3.123 1.024 6.219l.051.418c.636 4.603 1.682 9.16 2.278 13.758l.057.302c.041.59.227 1.168.376 1.74 4.949-.061 9.919-.589 14.858-.919 4.659-.311 9.337-.352 13.996-.669 8.542-.583 17.109-1.476 25.672-1.69l-2.69-15.19c-.408-2.411-.985-4.93-1.14-7.366-3.805.195-7.615.526-11.419.765l-18.805 1.108c-8.085.54-16.162 1.146-24.258 1.524M85.959 76.698c-.732.006-2.851-.157-3.385.152l-.013.293c.448.255 56.548.093 61.518.082.747.015 2.465.208 3.037-.23-.343-.344-1.211-.322-1.691-.326l-32.633.014c-8.94.003-17.895-.109-26.833.015"
      />
      <path
        fill="#fff"
        d="M127.091 117.282c1.702-1.529 3.201-3.395 4.722-5.106a697 697 0 0 0 8.279-9.416l24.08-27.258 8.963-10.147c1.692-1.926 3.334-4.002 5.157-5.803a6.4 6.4 0 0 1 2.068-1.377c2.035-.857 4.086-.536 6.072.26l-.147.062c-.377.152-.844.177-1.245.243-1.393.23-2.752.52-3.898 1.397-1.616 1.238-2.92 3.032-4.254 4.563-2.25 2.58-4.5 5.177-6.803 7.71a1720 1720 0 0 0-26.133 29.372c-5.001 5.681-10.083 11.282-14.987 17.047-.583-.577-1.155-1.141-1.874-1.547"
      />
      <path
        fill="#F0F0F3"
        d="M130.365 155.989a30 30 0 0 0 .934-.884c3.566-3.506 6.754-7.524 10.088-11.257l21.199-24.114c1.711-1.965 3.366-3.98 5.089-5.935a3443 3443 0 0 0 22.854-25.819l5.88-6.7c1.158-1.308 2.42-2.58 3.456-3.985a6.3 6.3 0 0 0 1.265-3.832c-.001-1.248-.319-2.489-1.005-3.54-1.192-1.829-4.706-4.62-6.441-6.232-1.581-1.469-3.092-3.02-4.682-4.477-.516-.472-1.302-.788-1.749-1.283q-.042-.051-.079-.104c1.329-.134 2.734-.038 4.074-.037 2.179 0 4.369-.044 6.546.044q.23.145.45.304c2.072 1.482 3.917 3.54 5.813 5.252l5.405 4.807c1.074.964 2.318 1.94 3.177 3.104.571.775.915 1.813 1.045 2.765.232 1.698-.263 3.354-1.319 4.695-1.53 1.942-3.227 3.795-4.832 5.679l-10.045 11.728a1701 1701 0 0 1-29.051 33.391 1231 1231 0 0 1-14.477 16.32c-2.224 2.476-4.406 5.305-6.93 7.473-1.369 1.177-2.955 1.776-4.73 1.997-3.929.429-7.983.444-11.935.64M158.693 66.014c-7.947.07-76.9-.106-77.506.194l-.109.124q-.467-3.122-1.077-6.218l77.929-.505c.105 2.139.656 4.256.763 6.405"
      />
      <path
        fill="#000"
        d="m81.079 66.332.109-.124c.606-.3 69.559-.123 77.505-.194.414.048.514.015.828.308l-.012.19c-1.079.346-8.981.12-10.739.118l-47.303.024-13.757.005c-2.014 0-4.466.202-6.418-.049-.083-.092-.156-.168-.213-.278"
      />
      <path
        fill="#15ADFF"
        d="M74.438 192.875a75.6 75.6 0 0 1-14.27-7.891 75.4 75.4 0 0 1-8.944-7.389 73 73 0 0 1-2.541-2.576 79 79 0 0 1-2.415-2.697 73 73 0 0 1-2.282-2.809 78 78 0 0 1-2.143-2.916 75 75 0 0 1-5.556-9.319 76 76 0 0 1-2.932-6.617 75.4 75.4 0 0 1-3.892-13.923 76 76 0 0 1-.923-7.177 75 75 0 0 1-.123-1.806c-.646-13.824 2.877-28.104 10.813-39.535 1.586-2.285 3.374-4.38 5.245-6.432a56.7 56.7 0 0 1 6.848-6.353 56.7 56.7 0 0 1 7.802-5.136 56 56 0 0 1 5.626-2.678c.344 1.666.515 3.381.74 5.068q.5 3.764 1.047 7.523l3.894 26.931 8.265 56.991 3.242 22.193c.46 3.168.824 6.348 1.324 9.511-2.964-.658-6.046-1.744-8.826-2.963"
      />
      <path
        fill="#000"
        d="M144.079 77.225c-4.97.01-61.07.172-61.518-.082l.014-.293c.533-.31 2.652-.146 3.384-.153 8.939-.123 17.893-.011 26.833-.015l32.633-.013c.481.004 1.348-.018 1.691.326-.572.438-2.29.245-3.037.23"
      />
      <path
        fill="#fff"
        d="M84.594 87.875c1.611.169 5.159-.31 6.982-.438q7.343-.511 14.693-.906c.591 3.656 1.279 7.295 1.855 10.952.252 1.598.36 3.874.808 5.353l.936.149c-.388-.01-.78-.021-1.168.006-3.928.285-5.981 3.377-8.331 6.115-4.132-.057-8.308.273-12.445.346-.421-3.947-1.148-7.887-1.74-11.813-.47-3.11-.803-6.293-1.376-9.38-.031-.167-.1-.264-.215-.384"
      />
      <path
        fill="#F0F0F3"
        d="M110.553 88.363c1.974.026 3.944-.134 5.915-.203l10.3-.317 25.998-.702-2.675 3.051c-10.397.63-20.839.736-31.246 1.152-1.249.05-6.839.11-7.513.329-.081.025-.14.097-.209.145l-.056.167c-.189-1.21-.398-2.402-.514-3.622M111.103 92.161c1.203.124 2.512-.05 3.723-.104l6.933-.301 17.885-.602c3.274-.112 6.559-.318 9.833-.359-4.11 4.822-8.35 9.53-12.502 14.316l-21.342.853a22 22 0 0 0-2.655-2.051c-.016-1.288-.395-2.654-.607-3.927z"
      />
      <path
        fill="#fff"
        d="M93.712 127.034q-.052-.036-.103-.074c-.753-.579-3.905-3.359-4.015-4.184 1.194-2.403 7.898-9.29 9.998-11.607 1.665-1.836 3.242-3.83 5.013-5.559 1.425-1.39 3.097-1.815 5.029-1.802-1.564 1.204-2.832 2.732-4.155 4.187l-4.472 4.904a494 494 0 0 0-4.803 5.348c-.89.995-1.878 1.974-2.64 3.073-.355.509-.563 1.19-.653 1.798-.208 1.393.312 2.648.8 3.916"
      />
      <path
        fill="#F0F0F3"
        d="M116.077 106.434c6.628-.135 13.248-.572 19.877-.676.19-.011.092-.027.29.068-.165.683-7.987 9.066-9.16 10.343-1.859-1.499-3.639-3.113-5.405-4.718-1.886-1.651-3.696-3.389-5.602-5.017"
      />
      <path
        fill="#15ADFF"
        d="M27.856 111.471c-2.78 12.034-1.777 24.635 2.03 36.33a74 74 0 0 0 2.756 7.124 76 76 0 0 0 2 4.126 75 75 0 0 0 4.744 7.842 71 71 0 0 0 1.792 2.477 76 76 0 0 0 2.874 3.572 75 75 0 0 0 6.382 6.579 73 73 0 0 0 2.3 2.012 75 75 0 0 0 6.099 4.601c2.845 1.92 5.963 3.622 9.02 5.182-.052.166-.025.24-.2.317-.936.41-11.396.557-13.56.67-2.025-1.203-3.96-2.879-5.748-4.406a73 73 0 0 1-3.653-3.377 72 72 0 0 1-6.558-7.474 71.5 71.5 0 0 1-7.736-12.735 71 71 0 0 1-3.611-9.265 67.6 67.6 0 0 1-2.494-11.183 67.8 67.8 0 0 1 .362-20.566 68 68 0 0 1 .928-4.492c.568-2.409 1.122-5.135 2.273-7.334"
      />
      <path
        fill="#F0F0F3"
        d="M162.811 137.252c6.354-7.65 13.222-14.922 19.797-22.385.605 2.581 1.223 5.399 1.416 8.038-.775 1.784-2.331 3.405-3.582 4.88l-4.633 5.422c-.936 1.094-1.939 2.173-2.78 3.341q1.484 7.342 2.794 14.716c.35 1.963.942 4.162.971 6.151-.182.188-.346.223-.606.209-.171-.008-.346-.02-.483-.125l-.2-.378c-1.053-.309-50.187 2.208-52.327 2.706-.015-1.165-.656-3.006-.902-4.235 1.006.643 1.997 1.111 3.182 1.311 2.021.34 4.367-.059 6.408-.172l8.965-.454c1.878-.099 3.634-.328 5.289-1.288 2.792-1.62 5.991-5.801 8.263-8.339l7.488-8.348c.197.132.372.244.609.291.695.137 1.688-.076 2.405-.146 2.299-.224 5.539-.254 7.518-1.584-3.145-.007-6.487.924-9.592.389"
      />
      <path
        fill="#000"
        d="M203.012 136.275c.031-.476.048-.995.214-1.447.319-.865.939-1.282 1.735-1.677q.112-.016.224-.03c.809-.097 1.627.027 2.268.565.833.699 1.01 1.669 1.11 2.686.825.075 1.48.123 2.169.638.588.439.986 1.063 1.08 1.798a2.47 2.47 0 0 1-.168 1.27 2.5 2.5 0 0 1-.247.455q-.074.107-.158.205c-.756.88-1.645.958-2.722 1.016-.019.52-.021 1.064-.2 1.558-.303.838-.878 1.27-1.66 1.646-.734.184-1.527.179-2.188-.226-.992-.606-1.237-1.802-1.47-2.849-.734-.119-1.399-.23-2.018-.678-.608-.439-1.048-1.052-1.151-1.806a2.8 2.8 0 0 1-.016-.516 3 3 0 0 1 .086-.509 2.5 2.5 0 0 1 .187-.482 2.6 2.6 0 0 1 .279-.434c.702-.894 1.593-1.048 2.646-1.183m2.47-2.567c-.568.271-1.228.563-1.471 1.192-.302.784.089 1.397-.644 2.062-.954.37-2.125-.013-2.631 1.139-.201.455-.401 1.271-.197 1.758.188.448.549.701.995.864.707.26 1.755.27 2.174.968.573.954-.061 2.026 1.302 2.529.382.141.685.182 1.089.171.564-.241 1.174-.497 1.425-1.103.305-.735-.052-1.435.602-2.087.954-.25 2.076-.049 2.649-1.023a2.18 2.18 0 0 0 .197-1.705c-.152-.507-.496-.94-.982-1.161-.615-.28-1.497-.248-2.176-.308-.03-.927 0-2.073-.748-2.755-.417-.38-1.027-.556-1.584-.541"
      />
      <path
        fill="#fff"
        d="M206.099 144.39a2.7 2.7 0 0 1-1.089-.17c-1.363-.503-.729-1.575-1.302-2.53-.419-.697-1.467-.708-2.174-.967-.446-.163-.807-.417-.995-.864-.204-.487-.004-1.303.197-1.758.506-1.152 1.677-.769 2.631-1.139.733-.666.342-1.279.644-2.062.243-.63.903-.922 1.471-1.192.557-.015 1.167.16 1.584.541.748.682.718 1.828.748 2.755.679.06 1.56.028 2.176.308.486.221.83.654.981 1.161a2.17 2.17 0 0 1-.196 1.705c-.573.974-1.695.773-2.649 1.022-.654.653-.297 1.353-.602 2.088-.251.606-.861.862-1.425 1.102"
      />
      <path
        fill="#97EBFE"
        d="M162.81 137.252c3.106.535 6.448-.396 9.592-.39-1.978 1.33-5.218 1.361-7.517 1.585-.717.07-1.711.283-2.405.146-.237-.047-.412-.159-.609-.292z"
      />
      <path
        fill="#fff"
        d="M105.407 139.413c2.456 2.242 4.804 4.62 7.199 6.928 1.224 1.178 2.732 2.368 3.783 3.686.011 1.867 1.856 9.164 1.417 10.26l-.134.084c-.248-.222-.349-.272-.683-.287-2.07-.092-4.298.232-6.371.382-4.74.341-9.496.784-14.245.948-.825-3.913-1.306-7.953-1.982-11.9-.438-2.557-1.458-7.006-1.514-9.459 3.93-.036 8.573-.318 12.53-.642"
      />
      <path
        fill="#000"
        d="M95.853 162.01c-.39-2.404-3.636-21.135-3.5-21.695l.524-.26c.056 2.454 1.076 6.902 1.514 9.46.676 3.946 1.157 7.987 1.982 11.899 4.749-.163 9.505-.607 14.245-.948 2.073-.149 4.301-.474 6.37-.381.335.015.435.065.684.286-1.216.44-4.227.415-5.665.522q-8.073.611-16.154 1.117M175.704 157.499c-5.167.397-10.378.535-15.555.774l-25.129 1.275c-3.679.206-7.409.303-11.075.644a1.06 1.06 0 0 1-.599-.091l-.168-.274c2.14-.498 51.273-3.015 52.327-2.706z"
      />
      <path
        fill="#F0F0F3"
        d="M126.521 182.638a117 117 0 0 1-1.024-6.219c8.096-.378 16.173-.984 24.258-1.524l18.805-1.108c3.804-.239 7.614-.57 11.419-.766.155 2.436.732 4.955 1.14 7.366l2.69 15.191c-8.563.213-17.13 1.106-25.672 1.689-4.659.318-9.337.358-13.996.67-4.939.33-9.909.858-14.858.918-.148-.571-.335-1.15-.376-1.74 1.786.016 3.65-.226 5.436-.351l10.592-.75 29.858-2.022c1.289-.09 6.83-.268 7.531-.582l.012-.223-.168-.151c-2.694.046-5.415.331-8.106.5l-16.979 1.119-17.373 1.179c-3.39.231-6.823.381-10.2.752-.274.03-.436.052-.66.228-.596-4.598-1.642-9.156-2.278-13.758 3.943-.051 7.977-.531 11.917-.806l21.681-1.451 13.891-.904c1.457-.099 3.946-.084 5.257-.355.323-.067.354-.112.513-.372l-.116-.156c-6.157.574-52.48 3.204-53.194 3.626"
      />
      <path
        fill="#fff"
        d="M98.036 179.779c-.06-.507-.236-.964-.314-1.459-.045-.284.002-.432.172-.652l.637-.044q8.992-.558 17.971-1.284c1.535-.13 3.084-.17 4.613-.338.787 5.092 1.812 10.181 2.759 15.247.464 2.481 1.071 5.003 1.324 7.513q-7.009.448-14.022.814c-2.342.137-4.689.418-7.038.443-.728.073-1.812.341-2.47-.009-.65-1.946-.86-4.31-1.212-6.342l-2.111-12.184z"
      />
      <path
        fill="#000"
        d="M126.521 182.638c.714-.422 47.036-3.052 53.194-3.626l.116.156c-.159.26-.19.306-.514.373-1.31.271-3.799.255-5.256.355l-13.891.903-21.681 1.451c-3.94.275-7.974.755-11.917.806z"
      />
      <path
        fill="#15ADFF"
        d="M67.853 191.315c4.639 2.238 10.43 4.639 15.543 5.407.442 2.545.62 5.163 1.137 7.688-10.845-1.839-21.507-5.517-30.44-12.107 2.164-.113 12.624-.26 13.56-.67.175-.077.148-.152.2-.318"
      />
      <path
        fill="#000"
        d="M128.85 196.814c.224-.175.386-.198.66-.228 3.377-.37 6.81-.52 10.2-.751l17.373-1.18 16.979-1.118c2.691-.17 5.412-.455 8.106-.5l.168.151-.012.222c-.701.314-6.242.493-7.531.582l-29.858 2.022-10.592.75c-1.786.126-3.65.368-5.436.352zM36.19 208.101c-1.296.24-2.612.075-3.762-.593a6 6 0 0 1-.44-.291 6 6 0 0 1-.6-.513 5.5 5.5 0 0 1-.948-1.26 6 6 0 0 1-.326-.72 5.7 5.7 0 0 1-.271-1.049 5.4 5.4 0 0 1-.06-1.112 5.3 5.3 0 0 1 .101-.83 5.5 5.5 0 0 1 .442-1.318 6 6 0 0 1 .268-.489c.872-1.411 2.083-2.051 3.635-2.444 1.137-.091 2.165-.068 3.22.435 1.316.625 2.374 1.812 2.813 3.204a5 5 0 0 1 .138.537 5.4 5.4 0 0 1 .105.824 5.7 5.7 0 0 1-.098 1.379 5.6 5.6 0 0 1-.555 1.561c-.798 1.467-2.107 2.235-3.662 2.679m-1.75-9.921c-1.43.407-2.579 1.083-3.303 2.441-.588 1.102-.746 2.429-.371 3.627a4.5 4.5 0 0 0 .478 1.041 5 5 0 0 0 .409.555 4 4 0 0 0 .317.332 4.4 4.4 0 0 0 .728.56 4 4 0 0 0 .402.222c.93.444 1.917.524 2.927.384 1.361-.462 2.514-1.09 3.198-2.426.57-1.114.64-2.445.247-3.627a4.4 4.4 0 0 0-.49-1.042 5 5 0 0 0-.416-.554 5 5 0 0 0-.323-.331 4.5 4.5 0 0 0-1.144-.772c-.872-.405-1.715-.458-2.66-.41"
      />
      <path
        fill="#fff"
        d="M36.027 207.342c-1.01.14-1.997.06-2.927-.384a4 4 0 0 1-.402-.221 4.67 4.67 0 0 1-1.045-.893 4 4 0 0 1-.409-.555 4.4 4.4 0 0 1-.404-.824 4 4 0 0 1-.074-.217c-.375-1.197-.217-2.525.37-3.627.725-1.358 1.874-2.033 3.303-2.441.945-.048 1.788.005 2.66.41a5 5 0 0 1 .407.218 4 4 0 0 1 .383.259 5 5 0 0 1 .354.296 4.4 4.4 0 0 1 .61.692 4.6 4.6 0 0 1 .543 1.016q.041.108.076.218c.393 1.182.323 2.514-.247 3.627-.684 1.336-1.837 1.964-3.198 2.426"
      />
      <path
        fill="#000"
        d="M101.853 200.01c-.39-2.404-3.636-21.135-3.5-21.695l.524-.26c.056 2.454 1.076 6.902 1.514 9.46.676 3.946 1.157 7.987 1.982 11.899 4.749-.163 9.505-.607 14.245-.948 2.073-.149 4.301-.474 6.37-.381.335.015.435.065.684.286-1.216.44-4.227.415-5.665.522q-8.073.611-16.154 1.117"
      />
    </g>
    <defs>
      <clipPath id="success_checkmark_svg__a">
        <path fill="#fff" d="M0 0h240v240H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgSuccessCheckmark)
const Memo = memo(ForwardRef)
export default Memo
