{
  description = "Generic Node.js Template";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-24.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        pname = "SERA-HP";
        version = "0.0.1";
        buildInputs = with pkgs; [
          nodejs_22
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
