{
  description = "SERA HP Dev env";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
        pname = "SERA-HP";
        version = "0.0.1";
        buildInputs = with pkgs; [
          nodejs_24
          neovim
        ];
        nativeBuildInputs = buildInputs;
      in
      {
        devShells.default = pkgs.mkShell {
          inherit buildInputs;
          shellHook = ''
            export PS1="(devShell ${pname}) \w \$ "
          '';
        };
      }
    );
}
