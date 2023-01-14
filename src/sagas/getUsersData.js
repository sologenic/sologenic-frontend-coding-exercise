import axios from "axios";

export default function getUsersData() {
  const users = axios({
    method: "post",
    baseURL: "https://api.sologenic.org/api/v1/nft-minter/user/all",
    data: {
      address: "not-required",
      addresses: [
        "rXRPncvJ7VVw6nrbCdXwDnSLKx7FMdVj6",
        "rw8nJr75ity8nsnDqemm4zDqPEG2kH9krD",
        "rLaAu5FDpkjgxfBvK2oCjPRQw9GZkhSwv6",
        "rPLgcsUGFysgff9BBJvfwcW85fhZ1xboCw",
        "rG8mFkhfH8uqvYgE9wUiiLRGZTxU4QrbVE",
        "rKqLxi5JcnSH5o1PwgqxdaUC4bHC9YfG9n",
        "rsNkqXDUUsuKXoa73M8xPALsHp6zyxu7z7",
        "rEkyCSdoPRbmv9XgTygDGHASqfS4w6KYjo",
        "rJuDfm6R2BQFQLNyx3UFrHtF9Fku2rU6rR",
        "rnwDPmV5LhqaK2FNgeGN3oZMJWAxjBmMzv",
        "rHCBsCLwHMv9KYpyTLGnw38g6KCxQD7QWm",
        "rUrK7n2snukEku2ymUARBsJ4NY5nT48Qdj",
        "r9htPBXGd8vXqP4GEXa8ncHBfRcGew4reP",
        "rwhnNLfv3iwSrv7kg7DvYiVxp73izV95ME",
        "r4CmUiogfNkCUYRxC17c2AcpGokfxBGhS5",
        "rEmzZYR442kSm5UG9NgPfvyS33aRqFtY5E",
        "rEyAtFo1DGAKTKbJ8wuWcg11U51FqN8Kj1",
        "rDU3jMxVs5DF5h2T2sti86uqiMWySBWokE",
        "rQNmxrTpnUMdkQVGt5guhkmC19YACpw1RE",
      ],
    },
  })
    .then((r) => r.data.response)
    .catch((e) => alert(e));

  return users;
}
